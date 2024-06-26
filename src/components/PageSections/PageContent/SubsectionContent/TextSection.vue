<script setup lang="ts">
import SubsectionHeader from './SubsectionHeader.vue'
import ListSection from './ListSection.vue'
import ImageSection from './ImageSection.vue'
import MediaGallerySection from './MediaGallerySection.vue'
import NavSection from './NavSection.vue'
import LinkSection from './LinkSection.vue'

import { type TextSectionDetails } from '../../../../types/SubsectionData'

import { ref } from 'vue'

const props = defineProps(['sectionBody', 'headingLevel'])
const sectionBody = props.sectionBody as TextSectionDetails

let header = ref(sectionBody.Header)
let headingParagraphs: [...any] = sectionBody.HeadingParagraphs || null
let footerParagraphs: [...any] = sectionBody.FooterParagraphs || null
let subsections: [...any] = sectionBody.Subsections || []
</script>

<template>
  <div :class="'subsection subsection-head-' + headingLevel">
    <SubsectionHeader :heading-level="$props.headingLevel" :heading-text="header" />

    <div class="subsection" v-if="headingParagraphs != null">
      <p v-for="hp in headingParagraphs" v-html="hp" v-bind:key="hp"></p>
    </div>

    <!-- Recursively build subsections -->
    <div
      :class="'subsection subsection-head-' + (headingLevel + 1)"
      v-for="sp in subsections"
      v-bind:key="sp"
    >
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
      <MediaGallerySection
        v-else-if="sp.Type == 'MediaGallerySection'"
        :section-body="sp"
        :heading-level="headingLevel + 1"
      />
    </div>

    <div class="subsection" v-if="footerParagraphs != null">
      <p v-for="fp in footerParagraphs" v-html="fp" v-bind:key="fp"></p>
    </div>
  </div>
</template>
