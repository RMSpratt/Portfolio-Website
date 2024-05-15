<script setup lang="ts">
defineProps(['headingLevel', 'headingText'])
</script>
<template>
  <h2 v-if="headingLevel == 2">{{ headingText }}</h2>
  <h3 v-else-if="headingLevel == 3">{{ headingText }}</h3>
  <h4 v-else-if="headingLevel == 4">{{ headingText }}</h4>
  <p v-else class="subsection-small-heading">{{ headingText }}</p>
</template>
<style></style>
