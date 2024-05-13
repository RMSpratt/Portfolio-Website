<script setup lang="ts">

    const LINK_SRC_PREFIX = '../../../assets/'
    const props = defineProps(['sectionBody', 'headingLevel']);

    let header: string = props.sectionBody.Header;
    let headingParagraphs: [...any] = props.sectionBody.HeadingParagraphs || [];
    let footerParagraphs: [...any] = props.sectionBody.FooterParagraphs || [];
    let imagePath: string = props.sectionBody.Image;

    function getPath(srcPath: string)
    {
        return new URL(`${LINK_SRC_PREFIX}${srcPath}`, import.meta.url).href
    }

</script>

<template>
    <div>
        <h2 v-if="headingLevel == 2 && header">{{ header }}</h2>
        <h3 v-else-if="headingLevel == 3 && header"> {{ header }}</h3>
        <p v-else header> {{ header }}</p>

        <img v-if="imagePath" :src="getPath(imagePath)">
        <div>
            <p v-for="fp in footerParagraphs"> {{ fp }}</p>
        </div>
    </div>
</template>
<style lang="scss">
</style>