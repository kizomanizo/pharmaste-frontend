<template>
    <div class="sticker salesSticker">
        <span class="leftIcon">
            <slot class="salesIcon">Icon</slot>
        </span>
        <span class="rightText">
            <span class="rightBoldText">
                <slot class="boldText">Item Sold</slot>            </span>
            <span class="rightLightText">
                <slot class="mutedText">Sold at 12:00</slot>
            </span>
        </span>
    </div>

</template>

<script setup lang="ts">
// nothing yet
</script>

<style>
.sticker {
    border-radius: 10px;
    background-color: var(--white-00);
    padding: 10px;
}

.card {
    border-radius: 10px;
    background-color: var(--white-00);
    padding: 0 30px;
}

.salesSticker {
    display: inline-grid;
    grid-template-columns: 3fr 7fr;
    gap: 5px;
}

.rightBoldText {
    font-size: 150%;
    font-weight: normal;
    margin-bottom: 30px;
    color: var(--gray-60)
}

.rightLightText {
    color: var(--gray-30);
}

@media only screen and (max-device-width: 900px) {
    .sticker {
        margin: 5px 0;
    }

    .stickers {
    display: block !important;
    margin: 0 auto;
    }
}
</style>