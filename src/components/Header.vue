<script setup lang="ts">
    let pageHeadings: string[] = ["About", "Roblox", "Unity", "Music"]

    const props = defineProps(['pageTitle']);
    defineEmits(['setPageSection']);
</script>

<template>
    <div id="header">
        <div id="pageHeading">
            <h1>Reed Spratt - {{ pageTitle }}</h1>
        </div>
        <div id="headerNav">
            <div v-for="item in pageHeadings">
                <button @click="$emit('setPageSection', item)"> {{ item }}</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss">

    #header {
        align-items: center;
        background-color:rgb(28, 185, 156);
        display: flex;
        height: 80px;
        padding: 10px;
    }

    #pageHeading {
        flex-grow: 6;
    }

    #headerNav {
        display: flex;
        flex-grow: 4;
        justify-content: right;
    }

    #headerNav > div {
        width: 25%;

        button {
            background: none;
            border: 0px;
        }

        :hover {
            cursor: pointer;
            font-weight: bold;
        }
    }


</style>