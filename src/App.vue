<script setup lang="ts">
import Header from './components/Header.vue'
import Body from './components/Body.vue'

import {ref} from 'vue';

    let currPageTitle = ref('About')

    function setCurrPage(newPage: string) {
        currPageTitle.value = newPage
    }

</script>

<template>
    <Header :page-title="currPageTitle" @set-page-section="setCurrPage"/>
    <Body/>
</template>

<style>
    *, html {
        box-sizing: border-box;
        font-family: "nunito", sans-serif; 
        margin: 0px;
        padding: 0px;
    }
</style>
