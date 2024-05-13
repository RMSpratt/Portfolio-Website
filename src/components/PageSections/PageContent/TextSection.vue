<script setup lang="ts">
import ListSection from './ListSection.vue';

    const props = defineProps(['sectionBody', 'headingLevel']);

    let header: string = props.sectionBody.Header || "TEXT_SECTION";
    let headingParagraphs: [...any] = props.sectionBody.HeadingParagraphs || [];
    let footerParagraphs: [...any] = props.sectionBody.FooterParagraphs || [];
    let subsections: [...any] = props.sectionBody.Subsections || [];
</script>

<template>
    <div>
        <h2 v-if="headingLevel == 2">{{ header }}</h2>
        <h3 v-else-if="headingLevel == 3"> {{ header }}</h3>
        <p v-else> {{ header }}</p>

        <!-- Recursively build subsections -->
        <div class="subsection">
            <p v-for="hp in headingParagraphs"> {{ hp }}</p>
        </div>
        <div class="subsection" v-for="sp in subsections">
            <TextSection v-if="sp.Type == 'TextSection'" :section-body=sp :heading-level="3" />
            <ListSection v-else-if="sp.Type == 'ListSection'" :section-body=sp :heading-level="3"/>
        </div>

        <div class="subsection">
            <p v-for="fp in footerParagraphs"> {{ fp }}</p>
        </div>
    </div>
</template>
<style lang="scss">
</style>