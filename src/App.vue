<script setup lang="ts">
import Header from './components/PageHeader.vue'
import Body from './components/PageBody.vue'

import { ref } from 'vue'

const PAGE_MAP: { [id: string]: number } = {
  About: 0,
  Roblox: 1,
  Unity: 2,
  Web: 3,
  Research: 4
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
h3,
h4,
li,
label,
a {
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

h4 {
  font-size: 1rem;
}

em {
  font-size: 0.9rem;
}

p,
li {
  line-height: 1.25rem;
}

img {
  height: auto;
  max-width: 600px;
  max-height: 20rem;
}

img,
video {
  box-shadow: 0 2px 5px $pageColor-dark;
}

.activeHeader {
  font-weight: bold;
  font-style: italic;
}

@media screen and (max-width: 600px) {
  html {
    font-size: 12px;
  }

  p,
  li {
    line-height: 2rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  h1,
  h2,
  h3,
  h4 {
    text-align: center;
  }
}
</style>
