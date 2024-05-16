<script setup lang="ts">
import SubsectionHeader from './SubsectionHeader.vue'
import { ref } from 'vue'
import { type ListSectionDetails } from '../../../../types/SubsectionData'

const props = defineProps(['sectionBody', 'headingLevel'])
const sectionBody = props.sectionBody as ListSectionDetails

let header = ref(sectionBody.Header)
let items = sectionBody.Items
</script>

<template>
  <div>
    <SubsectionHeader :heading-level="$props.headingLevel" :heading-text="header" />
    <ul>
      <li v-for="item in items" v-bind:key="item" v-html="item"></li>
    </ul>
  </div>
</template>
<style>
ul {
  list-style-position: inside;
}
</style>
