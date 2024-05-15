<script setup lang="ts">
import Header from './components/PageHeader.vue'
import Body from './components/PageBody.vue'

import { ref } from 'vue'

const PAGE_MAP: { [id: string]: number } = {
  About: 0,
  Roblox: 1,
  Unity: 2,
  Music: 3
}

let currPageTitle = ref('About')

let activeSection = 0

function setCurrPage(newPage: string) {
  currPageTitle.value = newPage
  activeSection = PAGE_MAP[newPage] || 0
}
</script>

<template>
  <Header :page-title="currPageTitle" @set-page-section="setCurrPage" />
  <Body :active-section="activeSection" />
</template>

<style lang="scss">
*,
html {
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'nunito', sans-serif;
  margin: 0px;
  padding: 0px;
}

body {
  //   background-color: $pageColor-lightest;
}

button {
  background: none;
  border: 0px;
}

label {
  display: block;
  margin: 10px;

  a,
  p {
    display: inline-block;
  }
}

p,
h1,
h2,
h3 {
  color: $pageColor-darkest;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.25rem;
}

em {
  font-size: 0.9rem;
}

img {
  border-radius: 10%;
  display: flex;
  max-height: auto;
  margin: 20px auto;
  width: 50%;
  max-width: 250px;
}
</style>
