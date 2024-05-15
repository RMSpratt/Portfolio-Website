<script setup lang="ts">
import SubsectionHeader from './SubsectionHeader.vue'
import TextSection from './TextSection.vue'
import { ref } from 'vue'

const props = defineProps(['sectionBody', 'headingLevel'])

console.log(props.sectionBody)

let header = props.sectionBody.Header
let navItems = props.sectionBody.Items
let navHeaders: [string] = []
let navContent = []

let activeHeader = ref('')
let activeNavContent = ref({})

if (navItems !== undefined) {
  navItems.forEach((element) => {
    if (element.NavHeader !== undefined) {
      navHeaders.push(element.NavHeader)
      navContent[element.NavHeader] = element.NavContent
    }
  })
}

activeHeader.value = navHeaders.length > 0 ? navHeaders[0] : null
activeNavContent.value = navContent[activeHeader]

function setActiveHeader(headerLabel: string) {
  activeHeader.value = headerLabel
  activeNavContent.value = navContent[headerLabel]
}
</script>
<template>
  <div>
    <SubsectionHeader :heading-level="$props.headingLevel" :heading-text="header" />
    <div class="subsection-nav-items">
      <button
        v-for="headerLabel in navHeaders"
        v-bind:key="headerLabel"
        :class="[headerLabel == activeHeader ? 'activeHeader' : '']"
        @click="setActiveHeader(headerLabel)"
      >
        {{ headerLabel }}
      </button>
    </div>
    <div class="subsection">
      <TextSection
        v-if="activeNavContent && activeNavContent.Type == 'TextSection'"
        :section-body="activeNavContent"
        :heading-level="headingLevel + 1"
      />
    </div>
  </div>
</template>
<style lang="scss">
.subsection-nav-items {
  display: flex;
  justify-content: first baseline;

  * {
    width: 20%;
    text-align: left;
  }

  .activeHeader {
    font-weight: bold;
    font-style: italic;
  }
}
</style>
