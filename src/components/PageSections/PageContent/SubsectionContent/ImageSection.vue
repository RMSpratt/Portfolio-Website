<script setup lang="ts">
import SubsectionHeader from './SubsectionHeader.vue'

const LINK_SRC_PREFIX = '../../../../assets/'
const props = defineProps(['sectionBody', 'headingLevel'])

type ImageSectionDetails = {
  Header: string
  HeadingParagraphs: string[]
  FooterParagraphs: string[]
  WrappedParagraphs: string[]
  Image: {
    Name: string
    AltText: string
    Float: string
  }
}

const sectionBody = props.sectionBody as ImageSectionDetails

let imageHeader: string = sectionBody.Header
let headingParagraphs: string[] = props.sectionBody.HeadingParagraphs
let footerParagraphs: string[] = props.sectionBody.FooterParagraphs
let wrappedParagraphs: string[] = props.sectionBody.WrappedParagraphs

let imageAltText: string = ''
let imageClass: string = ''
let imageName: string = ''

if (props.sectionBody.Image) {
  imageAltText = props.sectionBody.Image.AltText
  imageClass = props.sectionBody.Image.Float
    ? sectionBody.Image.Float == 'Left'
      ? 'image-left'
      : 'image-right'
    : ''
  imageName = sectionBody.Image.Name
}

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
      <img v-if="imageName" :src="getPath(imageName)" :alt="imageAltText" :class="imageClass" />
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
</style>
