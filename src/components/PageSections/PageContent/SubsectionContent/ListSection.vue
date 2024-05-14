<script setup lang="ts">
import SubsectionHeader from './SubsectionHeader.vue'
import { ref } from 'vue'

const props = defineProps(['sectionBody', 'headingLevel'])

let header = ref(props.sectionBody.Header)
let items: [string] = props.sectionBody.Items || []
</script>

<template>
  <div>
    <SubsectionHeader :heading-level="$props.headingLevel" :heading-text="header" />
    <ul>
      <li v-for="item in items" v-bind:key="item">{{ item }}</li>
    </ul>
  </div>
</template>
<style>
ul {
  list-style-position: inside;
}
</style>
