<script setup lang="ts">
import SubsectionHeader from './SubsectionHeader.vue'

const LINK_SRC_PREFIX = '../../../../assets/'
const props = defineProps(['sectionBody', 'headingLevel'])

let header: string = props.sectionBody.Header
let imagePath: string = props.sectionBody.Image

function getPath(srcPath: string) {
  return new URL(`${LINK_SRC_PREFIX}${srcPath}`, import.meta.url).href
}
</script>

<template>
  <div>
    <SubsectionHeader :heading-level="$props.headingLevel" :heading-text="header" />
    <img v-if="imagePath" :src="getPath(imagePath)" />
  </div>
</template>
<style lang="scss"></style>
