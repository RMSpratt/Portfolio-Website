<script setup lang="ts">
import AboutMain from '../../assets/About/AboutMain.json'
import AboutSide from '../../assets/About/AboutSide.json'
import SectionBlock from './PageContent/SectionBlock.vue'
</script>

<template>
  <div v-for="(section, index) in AboutMain" v-bind:key="index" class="page-section-row">
    <div :class="index < AboutSide.length ? 'page-section-main' : 'page-section-full'">
      <SectionBlock :section-body="section" />
    </div>
    <div class="page-section-side" v-if="index < AboutSide.length">
      <SectionBlock :section-body="AboutSide[index]" />
    </div>
  </div>
</template>
<style lang="scss"></style>
