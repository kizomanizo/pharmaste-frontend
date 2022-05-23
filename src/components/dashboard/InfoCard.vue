<template>
    <div class="sticker infoSticker">
        <span class="cardText">
            <span class="biggerText">
                <slot name="biggerText">No Update</slot>
            </span>
            <br>
            <br>
            <span class="mutedText">
                <slot name="mutedText">Still Loading...</slot>
            </span>
        </span>
        <span class="cardNumber">
            <slot name="cardNumber">30</slot>
        </span>
        <span class="positive" v-if="$slots.positive">
            +<slot name="positive"></slot>%
        </span>
        <span class="negative" v-if="$slots.negative">
            <slot name="negative">%</slot>%
        </span>
    </div>
</template>

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

.infoSticker {
    display: inline-grid;
    grid-template-columns: 7fr 2fr 1fr;
    gap: 5px;
}

.biggerText {
    font-size: 150%;
    font-weight: normal;
    margin-bottom: 30px;
    color: var(--gray-60)
}

.mutedText {
    color: var(--gray-30);
}

.cardNumber {
    color: var(--helio-90);
    font-size: 180%;
    font-weight: normal;
}

.positive {
    color: var(--green-70);
}

.negative {
    color: var(--red-70);
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