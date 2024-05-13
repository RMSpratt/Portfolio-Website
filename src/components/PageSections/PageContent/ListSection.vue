<script setup lang="ts">

    const props = defineProps(['sectionBody', 'headingLevel']);

    let header: string = props.sectionBody.Header || "LIST_SECTION";
    let items: [string] = props.sectionBody.Items || [];

</script>

<template>
    <div>
        <h2 v-if="headingLevel == 2">{{ header }}</h2>
        <h3 v-else-if="headingLevel == 3"> {{ header }}</h3>
        <p v-else> {{ header }}</p>
        <ul>
            <li v-for="item in items">{{ item }}</li>
        </ul>
    </div>
</template>
<style>
    ul {
        list-style-position: inside;
    }
</style>