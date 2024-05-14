<script setup lang="ts">
import { ref } from 'vue'
import SubsectionHeader from './SubsectionHeader.vue'

const props = defineProps(['sectionBody', 'headingLevel'])

let header = ref(props.sectionBody.Header)
let linkItems: [...any] = props.sectionBody.LinkItems || []
</script>

<template>
  <div>
    <SubsectionHeader :heading-level="$props.headingLevel" :heading-text="header" />
    <div v-for="linkItem in linkItems" v-bind:key="linkItem.Id">
      <label :for="linkItem.Id">
        <strong>{{ linkItem.Label }}: </strong>
        <a :href="linkItem.Href">{{ linkItem.LinkText }}</a>
      </label>
    </div>
  </div>
</template>
<style></style>
