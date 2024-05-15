<script setup lang="ts">
import AboutPage from './PageSections/AboutPage.vue'
import RobloxPage from './PageSections/RobloxPage.vue'

defineProps(['activeSection'])
</script>

<template>
  <div id="page-section-full">
    <AboutPage v-if="$props.activeSection === 0" />
    <RobloxPage v-else-if="$props.activeSection === 1" />
    <!-- <UnitySection v-else-if="$props.activeSection === 2" />
    <MusicSection v-else-if="$props.activeSection === 3" /> -->
  </div>
</template>

<style lang="scss">
#page-section-full {
  display: flex;
  justify-content: space-between;
  padding: 2% 1%;
}

.page-section-main {
  align-items: center;
  flex-grow: 7.5;
  padding-right: 1%;
}

.page-section-side {
  flex-grow: 2.5;
  padding-left: 1%;
  max-width: 25%;

  h2 {
    text-align: center;
  }
}
</style>
