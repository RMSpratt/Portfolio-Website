<script setup lang="ts">
import SectionBlock from './PageContent/SectionBlock.vue'

import RobloxMain from '../../assets/Roblox/RobloxMain.json'
</script>

<template>
  <div class="page-section-main">
    <SectionBlock v-for="section in RobloxMain" :section-body="section" v-bind:key="section" />
  </div>
  <div class="page-section-side"></div>
</template>
<style lang="scss"></style>
