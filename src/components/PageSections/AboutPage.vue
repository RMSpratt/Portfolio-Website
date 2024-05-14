<script setup lang="ts">
import AboutMain from '../../assets/About/AboutMain.json'
import AboutSide from '../../assets/About/AboutSide.json'

import SectionBlock from './PageContent/SectionBlock.vue'
</script>

<template>
  <div class="page-section-main">
    <SectionBlock v-for="section in AboutMain" :section-body="section" v-bind:key="section" />
  </div>
  <div class="page-section-side">
    <SectionBlock v-for="section in AboutSide" :section-body="section" v-bind:key="section" />
  </div>
</template>
<style lang="scss"></style>
