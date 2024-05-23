<script setup lang="ts">
let pageHeadings: string[] = ['About', 'Roblox', 'Unity', 'Music', 'Research']

defineProps(['pageTitle'])
defineEmits(['setPageSection'])
</script>

<template>
  <div id="header">
    <div id="pageHeading">
      <h1>Reed Spratt - {{ pageTitle }}</h1>
    </div>
    <div id="headerNav">
      <div v-for="item in pageHeadings" v-bind:key="item">
        <button @click="$emit('setPageSection', item)">{{ item }}</button>
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

  button:hover {
    cursor: pointer;
    font-weight: bold;
  }
}
</style>
