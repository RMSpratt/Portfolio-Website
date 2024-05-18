<script setup lang="ts">
import TextSection from './SubsectionContent/TextSection.vue'
import ListSection from './SubsectionContent/ListSection.vue'
import ImageSection from './SubsectionContent/ImageSection.vue'
import ImageGallerySection from './SubsectionContent/ImageGallerySection.vue'
import LinkSection from './SubsectionContent/LinkSection.vue'
import NavSection from './SubsectionContent/NavSection.vue'

defineProps(['sectionBody'])
</script>

<template>
  <div class="page-section-block page-section-block-description">
    <div class="page-section-block-inner">
      <TextSection
        v-if="$props.sectionBody.Type == 'TextSection'"
        :section-body="$props.sectionBody"
        :heading-level="2"
      />
      <ListSection
        v-else-if="$props.sectionBody.Type == 'ListSection'"
        :section-body="$props.sectionBody"
        :heading-level="2"
      />
      <ImageSection
        v-else-if="$props.sectionBody.Type == 'ImageSection'"
        :section-body="$props.sectionBody"
        :heading-level="2"
      />
      <ImageGallerySection
        v-else-if="$props.sectionBody.Type == 'ImageGallerySection'"
        :section-body="$props.sectionBody"
        :heading-level="2"
      />
      <LinkSection
        v-else-if="$props.sectionBody.Type == 'LinkSection'"
        :section-body="$props.sectionBody"
        :heading-level="2"
      />
      <NavSection
        v-else-if="$props.sectionBody.Type == 'NavSection'"
        :section-body="$props.sectionBody"
        :heading-level="2"
      />
    </div>
  </div>
</template>
<style lang="scss">
.subsection-small-heading {
  font-style: italic;
  margin-bottom: 0.5rem;
}
.page-section-block-inner {
  background-color: $pageColor-lightest;
  border-radius: 10px 10px 0px 0px;
  padding: 1% 1%;
}
</style>
