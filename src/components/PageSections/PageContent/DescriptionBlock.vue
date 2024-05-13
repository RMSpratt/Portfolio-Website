<script setup lang="ts">
    defineProps(['sectionBody']);
</script>

<template>
    <div class="page-section-block page-section-block-description">
        <div class="subsection">
            <h2> {{ sectionBody.Header }}</h2>
            <p v-for="headerParagraph in sectionBody.HeadingParagraphs" v-html="headerParagraph"></p>
        </div>
        <div v-for="subsection in sectionBody.Subsections" class="subsection">
            <h3> {{ subsection.SubsectionHeader }}</h3>
            <p v-for="subsectionParagraph in subsection.SubsectionParagraphs" v-html="subsectionParagraph"></p>
        </div>
    </div>
</template>
<style lang="scss">

    .page-section-block-description {

        .subsection {
            margin-bottom: 20px;
        }
    }
</style>