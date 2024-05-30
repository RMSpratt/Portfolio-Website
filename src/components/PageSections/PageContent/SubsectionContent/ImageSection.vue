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

if (props.sectionBody.Image) {
  imageAltText = props.sectionBody.Image.AltText
  imageClass = sectionBody.Image.Class || ''
  imageFloat = sectionBody.Image.Float
  imageName = sectionBody.Image.Name
}
</script>

<template>
  <div>
    <SubsectionHeader :heading-level="$props.headingLevel" :heading-text="imageHeader" />
    <div class="subsection" v-if="headingParagraphs != null">
      <p v-for="hp in headingParagraphs" v-html="hp" v-bind:key="hp"></p>
    </div>
    <div :class="imageFloat == 'Right' ? 'image-container-reverse' : 'image-container'">
      <img v-if="imageName" :src="`${imageName}`" :alt="imageAltText" :class="imageClass" />
      <div class="subsection" v-if="wrappedParagraphs != null">
        <p v-for="wp in wrappedParagraphs" v-html="wp" v-bind:key="wp"></p>
      </div>
    </div>
    <div class="subsection" v-if="footerParagraphs != null">
      <p v-for="fp in footerParagraphs" v-html="fp" v-bind:key="fp"></p>
    </div>
  </div>
</template>
<style lang="scss">
.image-container,
.image-container-reverse {
  display: flex;
  justify-content: space-between;

  img {
    align-self: center;
    margin: 0px 0.75rem 0px 0px;
  }

  .profile-image {
    border-radius: 10%;
    max-height: 12rem;
    width: auto;
  }
  // Special Image Classes
  .side-image {
    border-radius: 10%;
    display: flex;
    height: auto;
    margin: 1rem auto;
    width: 80%;
    max-width: 250px;
  }
}

.image-container-reverse {
  flex-direction: row-reverse;

  img {
    margin: 0px 0px 0px 0.75rem;
  }
}

@media screen and (max-width: 600px) {
  .image-container,
  .image-container-reverse {
    flex-direction: column;

    img {
      margin: 0px 0px 0.75rem 0px;
    }
  }
}
</style>
