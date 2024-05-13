<script setup lang="ts">
    import TextSection from './TextSection.vue'; 
    import ListSection from './ListSection.vue';
    const props = defineProps(['sectionBody']);

</script>

<template>
    <div class="page-section-block page-section-block-description">
        <TextSection v-if="$props.sectionBody.Type == 'TextSection'"
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