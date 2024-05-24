<script setup lang="ts">
import { ref } from 'vue'
let pageNavHeadings: string[] = ['About', 'Roblox', 'Unity', 'Web', 'Research']
let activePageNavHeading = ref(pageNavHeadings[0])

defineProps(['pageTitle'])
const emits = defineEmits(['setPageSection'])

function setActivePageNav(pageNavHeading: string) {
  if (pageNavHeading == activePageNavHeading.value) return

  activePageNavHeading.value = pageNavHeading
  emits('setPageSection', pageNavHeading)
}
</script>

<template>
  <div id="header">
    <div id="pageHeading">
      <h1>Reed Spratt - {{ pageTitle }}</h1>
    </div>
    <div id="headerNav">
      <div v-for="navHeading in pageNavHeadings" v-bind:key="navHeading">
        <button
          type="button"
          :class="[navHeading == activePageNavHeading ? 'activeHeader' : '']"
          @click="setActivePageNav(navHeading)"
        >
          {{ navHeading }}
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#header {
  align-items: center;
  background-color: $pageColor-medium;
  box-shadow: 0 5px 5px $pageColor-dark;
  display: flex;
  height: 80px;
  padding: 10px;
}

#pageHeading {
  flex-grow: 6;
}

#headerNav {
  display: flex;
  flex-grow: 4;
  justify-content: right;
}

#headerNav > div {
  width: 25%;

  button {
    margin: 0px auto;
    width: 100%;
  }
}

#headerNav > div:hover button {
  cursor: pointer;
  font-weight: bold;
}
</style>
