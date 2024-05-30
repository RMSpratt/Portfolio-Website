<script setup lang="ts">
import SectionBlock from './PageContent/SectionBlock.vue'
import RobloxMain from '../../assets/Roblox/RobloxMain.json'
</script>

<template>
  <div v-for="(section, index) in RobloxMain" v-bind:key="index" class="page-section-row">
    <div class="page-section-full">
      <SectionBlock :section-body="section" />
    </div>
  </div>
</template>
