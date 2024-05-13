<script setup lang="ts">
import SideTextBlock from './PageContent/SideImageTextBlock.vue';

import AboutMain from '../../assets/About/AboutMain.json'
import AboutSide from '../../assets/About/AboutSide.json'

import SectionBlock from './PageContent/SectionBlock.vue';

</script>

<template>
    <div class="page-section-main">
        <SectionBlock v-for="section in AboutMain" :section-body="section"/>
    </div>
    <div class="page-section-side">
        <SectionBlock v-for="section in AboutSide" :section-body="section"/>
    </div>
</template>
<style lang="scss">
</style>