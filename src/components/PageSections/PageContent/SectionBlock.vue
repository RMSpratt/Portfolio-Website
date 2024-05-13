<script setup lang="ts">
import TextSection from './TextSection.vue'; 
import ListSection from './ListSection.vue';
import ImageSection from './ImageSection.vue';
import LinkSection from './LinkSection.vue';
    const props = defineProps(['sectionBody']);

</script>

<template>
    <div class="page-section-block page-section-block-description">
        <TextSection v-if="$props.sectionBody.Type == 'TextSection'"
            :section-body = "$props.sectionBody" :heading-level="2"/>
        <ListSection v-else-if="$props.sectionBody.Type == 'ListSection'"
            :section-body = "$props.sectionBody" :heading-level="2"/>
        <ImageSection v-else-if="$props.sectionBody.Type == 'ImageSection'"
            :section-body = "$props.sectionBody" :heading-level="2"/>
        <LinkSection v-else-if="$props.sectionBody.Type == 'LinkSection'"
            :section-body = "$props.sectionBody" :heading-level="2"/>
    </div>
</template>
<style lang="scss">

    .page-section-block-description {

        .subsection {
            margin-bottom: 20px;
        }
    }
</style>