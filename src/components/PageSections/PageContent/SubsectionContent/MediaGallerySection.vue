<script setup lang="ts">
import SubsectionHeader from './SubsectionHeader.vue'

const LINK_SRC_PREFIX = '../../../../assets/Images/'
const props = defineProps(['sectionBody', 'headingLevel'])

type MediaGalleryDetails = {
  Header: string
  HeadingParagraphs: string[]
  FooterParagraphs: string[]
  Media: [
    {
      MediaType: string
      Name: string
      AltText: string
      Caption: string
    }
  ]
}

const sectionBody = props.sectionBody as MediaGalleryDetails

let mediaHeader: string = sectionBody.Header
let headingParagraphs: string[] = props.sectionBody.HeadingParagraphs
let footerParagraphs: string[] = props.sectionBody.FooterParagraphs

let mediaItems: { Name: string; AltText: string; Caption: string; MediaType: string }[] = []

props.sectionBody.Media?.forEach(
  (mediaItem: { Name: string; AltText: string; Caption: string; MediaType: string }) => {
    mediaItems.push({
      ['MediaType']: mediaItem.MediaType,
      ['Name']: mediaItem.Name,
      ['AltText']: mediaItem.AltText,
      ['Caption']: mediaItem.Caption
    })
  }
)

function getPath(srcPath: string) {
  return new URL(`${LINK_SRC_PREFIX}${srcPath}`, import.meta.url).href
}
</script>

<template>
  <div>
    <SubsectionHeader :heading-level="$props.headingLevel" :heading-text="mediaHeader" />
    <div class="subsection" v-if="headingParagraphs != null">
      <p v-for="hp in headingParagraphs" v-html="hp" v-bind:key="hp"></p>
    </div>
    <div class="subsection media-gallery" v-if="mediaItems != null">
      <div v-for="mediaItem in mediaItems" v-bind:key="mediaItem.Name">
        <video v-if="mediaItem.MediaType == 'Video'" controls>
          <source :src="getPath(mediaItem.Name)" type="video/mp4" />
        </video>
        <img v-else :alt="mediaItem.AltText" :src="getPath(mediaItem.Name)" />
        <p v-if="mediaItem.Caption" v-html="mediaItem.Caption"></p>
      </div>
    </div>
    <div class="subsection" v-if="footerParagraphs != null">
      <p v-for="fp in footerParagraphs" v-html="fp" v-bind:key="fp"></p>
    </div>
  </div>
</template>
<style lang="scss">
.media-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: left;
  overflow: hidden;

  div {
    max-width: calc(33% - 0.4rem);
    text-align: center;
    img,
    video {
      width: 100%;
    }
  }
}

.media-gallery::after {
  content: '';
}

@media screen and (max-width: 600px) {
  .media-gallery {
    flex-direction: column;

    div {
      max-width: 100%;
    }
  }
}
</style>
