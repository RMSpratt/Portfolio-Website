<script setup lang="ts">
    import DescriptionBlock from './PageContent/DescriptionBlock.vue';
    import SideTextBlock from './PageContent/SideTextBlock.vue';
    import {AboutParagraph, AboutEducation, AboutExperience} from '../../assets/AboutInfo.json'
</script>

<template>
    <div class="page-section-main">
        <DescriptionBlock :section-body="AboutParagraph"/>
        <DescriptionBlock :section-body="AboutEducation"/>
        <DescriptionBlock :section-body="AboutExperience"/>
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