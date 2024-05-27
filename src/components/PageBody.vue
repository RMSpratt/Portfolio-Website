<script setup lang="ts">
import AboutPage from './PageSections/AboutPage.vue'
import RobloxPage from './PageSections/RobloxPage.vue'
import UnityPage from './PageSections/UnityPage.vue'
import ResearchPage from './PageSections/ResearchPage.vue'

defineProps(['activeSection'])
</script>

<template>
  <AboutPage v-if="$props.activeSection === 0" />
  <RobloxPage v-else-if="$props.activeSection === 1" />
  <UnityPage v-else-if="$props.activeSection === 2" />
  <ResearchPage v-else-if="$props.activeSection === 4" />
</template>

<style lang="scss">
.page-section-row {
  display: flex;
  padding: 0 1%;

  .page-section-main {
    align-items: center;
    flex-grow: 7.5;
    max-width: 80%;
    padding-right: 1%;
  }

  .page-section-full {
    margin: 0px auto;
    width: 100%;

    .page-section-block {
      padding: calc(80 / 90) * 1% calc(80 / 90) * 1%;
    }
  }

  .page-section-side {
    flex-grow: 2.5;
    padding-left: 1%;
    max-width: 20%;

    .page-section-block {
      padding: 4% 4%;
    }

    h2 {
      text-align: center;
    }
  }

  .page-section-separator {
    border: 2px solid $pageColor-dark;
  }

  .page-section-block {
    background-color: $pageColor-medium;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0 5px 5px $pageColor-dark;
    margin: 25px 0;
    padding: 1% 1%;

    transition: max-height 1s ease;

    h2 {
      margin-bottom: 1rem;
    }

    h3 {
      margin-bottom: 0.5rem;
    }

    .subsection {
      margin-bottom: 1.5rem;

      p {
        margin: 5px 0px;
      }

      .subsection {
        margin-bottom: 1rem;
      }
    }

    .subsection-head {
      :last-child {
        margin-bottom: 0px;
      }
    }
  }
}
</style>
