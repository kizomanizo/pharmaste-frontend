<template>
    <div class="salesSticker" :class="{ stickerLatest: isNewSales, 'stickerOld': isOldSales }" >
        <span class="leftIcon salesIcon">
            <slot name="salesIcon">
                <ShoppingIcon svg-color="var(--helio-90)" v-if="isNewSales" />
                <StethoscopeIcon svg-color="var(--helio-90)" v-else />
            </slot>
        </span>
        <span class="rightText">
            <span class="rightBoldText boldText">
                <slot name="boldText">Dawa ya mwisho kuuzwa.</slot></span>
            <br>
            <span class="rightLightText mutedText">
                <slot name="mutedText">Iliuzwa mnamo saa 12:00 mchana</slot>
            </span>
        </span>
    </div>
</template>

<script setup lang="ts">

    import StethoscopeIcon from '@/components/icons/IconStetho.vue'
    import ShoppingIcon from '@/components/icons/IconShopping.vue'

    defineProps({
        isNewSales: Boolean,
        isOldSales: Boolean
    })

    

</script>

<style scoped>
.stickerLatest {
    border-radius: 15px;
    background-color: var(--helio-10);
    padding: 20px 10px;
    margin: 20px 0 0 10px;
    letter-spacing: 0.04em;
}

.stickerOld {
    border-radius: 15px;
    background-color: var(--white-10);
    border: 2px solid var(--helio-20);
    padding: 20px 10px;
    margin: 30px 0 0 10px;
    letter-spacing: 0.02em;
}

.salesSticker {
    display: inline-grid;
    grid-template-columns: 2fr 8fr;
    gap: 5px;
    width: 90%;
}


.leftIcon {
    margin: auto;
    padding: 10px;
}

.leftIcon svg {
    height: 35px;
    fill: var(--helio-70);
    margin: auto;
}

.salesIcon {
    color: var(--helio-30);
    border-color: var(--helio-30);
}

.rightBoldText {
    font-size: 150%;
    font-weight: normal;
    margin-bottom: 30px;
    color: var(--helio-70)
}

.rightLightText {
    color: var(--gray-30);
    font-weight: normal;
}

@media only screen and (max-device-width: 900px) {
    .salesSticker {
        margin: 5px 0;
        display: block !important;
        margin: 0 auto;
    }
}

</style>