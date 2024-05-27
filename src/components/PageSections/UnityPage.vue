<script setup lang="ts">
import SectionBlock from './PageContent/SectionBlock.vue'

import UnityMain from '../../assets/Unity/UnityMain.json'
</script>

<template>
  <div v-for="(section, index) in UnityMain" v-bind:key="index" class="page-section-row">
    <div class="page-section-full">
      <SectionBlock :section-body="section" />
    </div>
  </div>
</template>
<style lang="scss"></style>
