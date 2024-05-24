<script setup lang="ts">
import SubsectionHeader from './SubsectionHeader.vue'
import TextSection from './TextSection.vue'
import MediaGallerySection from './MediaGallerySection.vue'
import { ref } from 'vue'
import { type Section, type NavSectionDetails } from '../../../../types/SubsectionData'

const props = defineProps(['sectionBody', 'headingLevel'])

console.log(props.sectionBody)

let header = props.sectionBody.Header
let headingParagraphs = props.sectionBody.HeadingParagraphs
let navItems = props.sectionBody.Items
let navHeaders: string[] = []
let navContent: { [key: string]: any } = {}

let activeHeader = ref('')
let activeNavContent = ref<Section | null>()

if (navItems !== undefined) {
  navItems.forEach((element: NavSectionDetails) => {
    if (element.NavHeader !== undefined) {
      navHeaders.push(element.NavHeader)
      navContent[element.NavHeader] = element.NavContent
    }
  })
}

activeHeader.value = navHeaders.length > 0 ? navHeaders[0] : ''
activeNavContent.value = navContent[activeHeader.value]

function setActiveHeader(headerLabel: string) {
  activeHeader.value = headerLabel
  activeNavContent.value = navContent[headerLabel]
}
</script>
<template>
  <div>
    <SubsectionHeader :heading-level="$props.headingLevel" :heading-text="header" />
    <div class="subsection" v-if="headingParagraphs != null">
      <p
        v-for="headingParagraph in headingParagraphs"
        v-html="headingParagraph"
        v-bind:key="headingParagraph"
      ></p>
    </div>
    <div class="subsection subsection-nav-header">
      <div v-for="headerLabel in navHeaders" v-bind:key="headerLabel">
        <button
          type="button"
          :class="[headerLabel == activeHeader ? 'activeHeader' : '']"
          @click="setActiveHeader(headerLabel)"
        >
          {{ headerLabel }}
        </button>
      </div>
    </div>
    <div class="subsection" v-for="navSection in activeNavContent" v-bind:key="navSection">
      <TextSection
        v-if="navSection.Type == 'TextSection'"
        :section-body="navSection"
        :heading-level="headingLevel + 1"
      />
      <MediaGallerySection
        v-else-if="navSection.Type == 'MediaGallerySection'"
        :section-body="navSection"
        :heading-level="headingLevel + 1"
      />
    </div>
  </div>
</template>
<style lang="scss">
.subsection-nav-header {
  border-bottom: 2px solid $pageColor-darkest;
  display: flex;
  justify-content: first baseline;
  margin: 1.25rem 0px;

  div {
    margin: 0px 1%;
    text-align: left;
    width: 18%;
  }

  div:hover button {
    cursor: pointer;
    font-weight: bold;
  }
}
</style>
