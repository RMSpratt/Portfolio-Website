<script setup lang="ts">
import AboutMain from '../../assets/About/AboutMain.json'
import SectionBlock from './PageContent/SectionBlock.vue'
</script>

<template>
  <div v-for="(section, index) in AboutMain" v-bind:key="index" class="page-section-row">
    <div class="page-section-full">
      <SectionBlock :section-body="section" />
    </div>
  </div>
</template>
