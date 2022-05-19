<template>
    <v-calendar :attributes="attrs"/>
</template>

<script setup lang="ts">
    const attrs = [
        {
          key: 'today',
          highlight: 'purple',
          dates: new Date(),
        },
      ]
</script>

<style>
    .vc-container {
        border: 0px solid !important;
        font-family: Nunito-Regular !important;
        width: 100% !important;
    }

    .vc-weekday, .vc-title {
        color: var(--gray-20) !important;
    }

    .vc-nav-container {
        background-color: var(--helio-90);
    }

    .vc-nav-popover-container {
        background-color: var(--helio-00) !important;
        border-color: var(--helio-90) !important;
    }

    .vc-arows-container svg {
        color: var(--helio-90)
    }

    .vc-svg-icon {
        color: var(--helio-90)
    }

    </style>