<script setup lang="ts">

    const props = defineProps(['sectionBody', 'headingLevel']);

    let header: string = props.sectionBody.Header;
    let linkItems: [...any] = props.sectionBody.LinkItems || [];
</script>

<template>
    <div>
        <h2 v-if="headingLevel == 2 && header">{{ header }}</h2>
        <h3 v-else-if="headingLevel == 3 && header"> {{ header }}</h3>
        <p v-else-if="header"> {{ header }}</p>

        <div v-for="linkItem in linkItems">
            <label :for="linkItem.Id">
                <strong>{{ linkItem.Label }}: </strong>
                <a :href="linkItem.Href">{{ linkItem.LinkText }}</a>
            </label>
        </div>
    </div>
</template>
<style>
</style>