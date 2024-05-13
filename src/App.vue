<script setup lang="ts">
import Header from './components/Header.vue'
import Body from './components/Body.vue'

import {ref} from 'vue';

    const PAGE_MAP: {[id: string]: number} = {
        About: 0,
        Roblox: 1,
        Unity: 2,
        Music: 3
    }

    let currPageTitle = ref('About')

    let activeSection = 0;


    function setCurrPage(newPage: string) {
        currPageTitle.value = newPage
        activeSection = PAGE_MAP[newPage] || 0
    }

</script>

<template>
    <Header :page-title="currPageTitle" @set-page-section="setCurrPage"/>
    <Body :active-section="activeSection"/>
</template>

<style>
    *, html {
        box-sizing: border-box;
        font-family: "nunito", sans-serif; 
        margin: 0px;
        padding: 0px;
    }

    label {
        display: block;
        margin: 10px;

        a, p {
            display: inline-block;
        }
    }

    img {
        border-radius: 10%;
        display: flex;
        max-height: auto;
        margin: 20px auto;
        width: 50%;
        max-width: 250px;
    }
</style>
