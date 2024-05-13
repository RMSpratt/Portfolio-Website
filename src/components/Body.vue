<script setup lang="ts">
import AboutSection from './PageSections/AboutPage.vue';
import RobloxSection from './PageSections/RobloxSection.vue';

    const props = defineProps(['activeSection'])
</script>

<template>
    <div id="page-section-full">
        <AboutSection v-if="$props.activeSection === 0"/>
        <RobloxSection v-else-if="$props.activeSection === 1"/>
    </div>
</template>
<style lang="scss">
    #page-section-full {
        display: flex;
        justify-content: space-between;
        padding: 2% 1%;
    } 

    .page-section-main {
        align-items: center;
        flex-grow: 7.5;
        padding-right: 1%;

        div {
            margin-bottom: 25px;
        }
    }

    .page-section-side {
        flex-grow: 2.5;
        padding-left: 1%;
        max-width: 25%;

        h2 {
            text-align: center;
        }
    }

    .page-section-block {
        background-color: rgb(102, 206, 196);
        border: 2px solid black;
        padding: 1% 2%;

        h2 {
            text-decoration: underline;
            margin-bottom: 10px;
        }
    
        h3 {
            margin-bottom: 10px;
        }
        p {
            margin: 5px 0px;
        }
    }

</style>