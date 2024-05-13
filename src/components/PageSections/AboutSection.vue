<script setup lang="ts">
import SideTextBlock from './PageContent/SideImageTextBlock.vue';

import AboutInfo from '../../assets/AboutContent.json'
import SectionBlock from './PageContent/SectionBlock.vue';

</script>

<template>
    <div class="page-section-main">
        <SectionBlock v-for="section in AboutInfo" :section-body="section"/>
    </div>
    <div class="page-section-side">
        <div class="page-section-block">
            <h2>Contact Information</h2>
            <img src="../../assets/Pfp.jpg">
            <div>
                <label for="githubLink">
                    <strong>Github: </strong>
                    <a id="githubLink" href="https://github.com/RMSpratt">https://github.com/RMSpratt</a>
                </label>
                <label for="linkedInLink">
                    <strong>LinkedIn: </strong>
                    <a id="linkedInLink" href="https://www.linkedin.com/in/reed-spratt-695818165/">https://www.linkedin.com/in/reed-spratt-695818165/</a>
                </label>
                <label for="emailContact">
                    ✉️
                    <p id="emailContact">reedspratt4@gmail.com</p>
                </label>
            </div>
        </div>
        <!-- <SideTextBlock :section/> -->
    </div>
</template>
<style lang="scss">
</style>