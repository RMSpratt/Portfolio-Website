<script setup lang="ts">
import SubsectionHeader from './SubsectionHeader.vue'

const LINK_SRC_PREFIX = '../../../../assets/Images/'
const props = defineProps(['sectionBody', 'headingLevel'])

type ImageGalleryDetails = {
  Header: string
  HeadingParagraphs: string[]
  FooterParagraphs: string[]
  Images: [
    {
      Name: string
      AltText: string
      Caption: string
    }
  ]
}

const sectionBody = props.sectionBody as ImageGalleryDetails

let imageHeader: string = sectionBody.Header
let headingParagraphs: string[] = props.sectionBody.HeadingParagraphs
let footerParagraphs: string[] = props.sectionBody.FooterParagraphs

let images: { Name: string; AltText: string; Caption: string }[] = []

props.sectionBody.Images?.forEach((image: { Name: string; AltText: string; Caption: string }) => {
  images.push({
    ['Name']: image.Name,
    ['AltText']: image.AltText,
    ['Caption']: image.Caption
  })
})

function getPath(srcPath: string) {
  return new URL(`${LINK_SRC_PREFIX}${srcPath}`, import.meta.url).href
}
</script>

<template>
  <div>
    <SubsectionHeader :heading-level="$props.headingLevel" :heading-text="imageHeader" />
    <div class="subsection" v-if="headingParagraphs != null">
      <p v-for="hp in headingParagraphs" v-html="hp" v-bind:key="hp"></p>
    </div>
    <div class="subsection image-gallery">
      <div v-for="image in images" v-bind:key="image.Name">
        <img :alt="image.AltText" :src="getPath(image.Name)" />
        <p v-if="image.Caption" v-html="image.Caption"></p>
      </div>
    </div>
    <div class="subsection" v-if="footerParagraphs != null">
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

  div {
    max-width: calc(33% - 3px);
    text-align: center;
    img {
      box-shadow: 0 2px 5px $pageColor-dark;
      height: auto;
      width: 100%;
    }
  }
}

.image-gallery::after {
  content: '';
}
</style>
