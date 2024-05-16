<script setup lang="ts">
import SubsectionHeader from './SubsectionHeader.vue'

const LINK_SRC_PREFIX = '../../../../assets/'
const props = defineProps(['sectionBody', 'headingLevel'])

type ImageGalleryDetails = {
  Header: string
  HeadingParagraphs: string[]
  FooterParagraphs: string[]
  Images: [
    {
      Name: string
      AltText: string
    }
  ]
}

const sectionBody = props.sectionBody as ImageGalleryDetails

let imageHeader: string = sectionBody.Header
let headingParagraphs: string[] = props.sectionBody.HeadingParagraphs
let footerParagraphs: string[] = props.sectionBody.FooterParagraphs

let images: { Name: string; AltText: string }[] = []

props.sectionBody.Images?.forEach((image: { Name: string; AltText: string }) => {
  images.push({ ['Name']: image.Name, ['AltText']: image.AltText })
})

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
    <div class="subsection image-gallery">
      <img
        v-for="image in images"
        v-bind:key="image.Name"
        :alt="image.AltText"
        :src="getPath(image.Name)"
      />
    </div>
    <div class="subsection">
      <p v-for="fp in footerParagraphs" v-html="fp" v-bind:key="fp"></p>
    </div>
  </div>
</template>
<style lang="scss">
.image-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: left;
  overflow: hidden;

  img {
    height: auto;
    max-width: calc(33% - 3px);
    object-fit: contain;
  }
}

.image-gallery::after {
  content: '';
}
</style>
