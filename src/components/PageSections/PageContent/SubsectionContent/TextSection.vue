<script setup lang="ts">
import SubsectionHeader from './SubsectionHeader.vue'
import ListSection from './ListSection.vue'
import ImageSection from './ImageSection.vue'
import LinkSection from './LinkSection.vue'

import { ref } from 'vue'

const props = defineProps(['sectionBody', 'headingLevel'])

let header = ref(props.sectionBody.Header)
let headingParagraphs: [...any] = props.sectionBody.HeadingParagraphs || []
let footerParagraphs: [...any] = props.sectionBody.FooterParagraphs || []
let subsections: [...any] = props.sectionBody.Subsections || []
</script>

<template>
  <div>
    <SubsectionHeader :heading-level="$props.headingLevel" :heading-text="header" />

    <div class="subsection">
      <p v-for="hp in headingParagraphs" v-html="hp" v-bind:key="hp"></p>
    </div>

    <!-- Recursively build subsections -->
    <div class="subsection" v-for="sp in subsections" v-bind:key="sp">
      <TextSection
        v-if="sp.Type == 'TextSection'"
        :section-body="sp"
        :heading-level="headingLevel + 1"
      />
      <ListSection
        v-else-if="sp.Type == 'ListSection'"
        :section-body="sp"
        :heading-level="headingLevel + 1"
      />
      <ImageSection
        v-else-if="sp.Type == 'ImageSection'"
        :section-body="sp"
        :heading-level="headingLevel + 1"
      />
      <LinkSection
        v-else-if="sp.Type == 'LinkSection'"
        :section-body="sp"
        :heading-level="headingLevel + 1"
      />
      <NavSection
        v-else-if="sp.Type == 'NavSection'"
        :section-body="sp"
        :heading-level="headingLevel + 1"
      />
    </div>

    <div>
      <p v-for="fp in footerParagraphs" v-html="fp" v-bind:key="fp"></p>
    </div>
  </div>
</template>
<style lang="scss"></style>
