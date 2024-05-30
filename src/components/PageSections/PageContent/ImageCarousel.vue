<script setup lang="ts">
import { ref } from 'vue'

let props = defineProps(['imageList'])
let imageList: [{ src: string }] = props.imageList

let currentImageIdx = ref(0)
let totalNumberImages = 0

if (imageList) {
  totalNumberImages = imageList.length
} else {
  imageList = [{ src: '../../../assets/Me.jpg' }]
}

function getPath(srcPath: string) {
  return new URL(`${srcPath}`, import.meta.url).href
}

function getNextImage(direction: number) {
  if (direction == 1) {
    currentImageIdx.value =
      currentImageIdx.value + 1 < imageList.length ? currentImageIdx.value + 1 : 0
  } else {
    currentImageIdx.value =
      currentImageIdx.value - 1 > 0 ? currentImageIdx.value - 1 : imageList.length - 1
  }
  console.log('Next!', currentImageIdx.value)
}
</script>

<template>
  <div>
    <img :src="getPath(imageList[currentImageIdx].src)" />
    <button @click="getNextImage(1)">Next!</button>
  </div>
</template>

<style lang="scss"></style>
