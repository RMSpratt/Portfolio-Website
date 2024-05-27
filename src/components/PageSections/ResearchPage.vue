<script setup lang="ts">
import ResearchMain from '../../assets/Research/ResearchMain.json'
import SectionBlock from './PageContent/SectionBlock.vue'
</script>

<template>
  <div v-for="(section, index) in ResearchMain" v-bind:key="index" class="page-section-row">
    <div class="page-section-full">
      <SectionBlock :section-body="section" />
    </div>
  </div>
</template>
<style lang="scss"></style>
