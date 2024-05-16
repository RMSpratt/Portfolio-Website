<script setup lang="ts">
import SubsectionHeader from './SubsectionHeader.vue'

const LINK_SRC_PREFIX = '../../../../assets/'
const props = defineProps(['sectionBody', 'headingLevel'])

import { type ImageSectionDetails } from '../../../../types/SubsectionData'

const sectionBody = props.sectionBody as ImageSectionDetails

let imageHeader: string = sectionBody.Header
let headingParagraphs: string[] = props.sectionBody.HeadingParagraphs
let footerParagraphs: string[] = props.sectionBody.FooterParagraphs
let wrappedParagraphs: string[] = props.sectionBody.WrappedParagraphs

let imageAltText: string = ''
let imageClass: string = ''
let imageFloat: string = ''
let imageName: string = ''
let imageCombinedClass: string = ''

if (props.sectionBody.Image) {
  imageAltText = props.sectionBody.Image.AltText
  imageFloat = props.sectionBody.Image.Float
    ? sectionBody.Image.Float == 'Left'
      ? 'image-left'
      : 'image-right'
    : ''
  imageName = sectionBody.Image.Name
  imageClass = sectionBody.Image.Class
}

imageCombinedClass += imageClass + ' ' + imageFloat

function getPath(srcPath: string) {
  return new URL(`${LINK_SRC_PREFIX}${srcPath}`, import.meta.url).href
}
</script>

<template>
  <div>
    <SubsectionHeader :heading-level="$props.headingLevel" :heading-text="imageHeader" />
    <div class="subsection">
      <p v-for="hp in headingParagraphs" v-html="hp" v-bind:key="hp"></p>
    </div>
    <div class="subsection image-container">
      <img
        v-if="imageName"
        :src="getPath(imageName)"
        :alt="imageAltText"
        :class="imageCombinedClass"
      />
      <p v-for="wp in wrappedParagraphs" v-html="wp" v-bind:key="wp"></p>
    </div>
    <div class="subsection">
      <p v-for="fp in footerParagraphs" v-html="fp" v-bind:key="fp"></p>
    </div>
  </div>
</template>
<style lang="scss">
.image-container {
  overflow: hidden;
}

.image-left {
  float: left;
}

.image-right {
  float: right;
}

// Special Image Classes
.side-image {
  border-radius: 10%;
  display: flex;
  max-height: auto;
  margin: 20px auto;
  width: 50%;
  max-width: 250px;
}
</style>
