<template>
    <div class="rightBottom">
        <div class="pageHeading">
            <h1 class="heading">{{ title.getTitle }}</h1>
        </div>
        <div class="contentWrapper">
            <div class="leftContent">
                <RouterView />
            </div>
            <div class="rightContent">
                <VCalendar />
                <hr class="mute">
                <div>
                    <SalesCard :is-new-sales="true" >
                        <template #boldText>Mauzo ya leo.</template>
                        <template #mutedText>123,500 TShs</template>
                    </SalesCard>
                    <SalesCard :is-old-sales="true" >
                        <template #boldText>Mauzo ya jana.</template>
                        <template #mutedText>230,000 TShs</template>
                    </SalesCard>
                    <SalesCard :is-old-sales="true" >    
                        <template #boldText>Mauzo ya juzi.</template>
                        <template #mutedText>189,400 TShs</template>
                    </SalesCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { RouterView } from "vue-router"
    import VCalendar from "@/components/ui/CalendarWidget.vue"
    import SalesCard from "@/components/ui/SalesCard.vue"
    import { useTitle } from "@/stores/title"
    const title = useTitle();
</script>

<style scoped>

    .mute {
        color: #ccc;
        border-color: #ccc;
        }

    .rightBottom {
        position: relative;
        padding: 20px;
    }

    .rightBottom h1 {
        font-size: 20px;
    }

    .contentWrapper {
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 30px;
    }

    .rightContent {
        border-radius: 10px;
        text-align: justify;
        background-color: Var(--white-00);
        /* padding: 10px; */
    }

    /* A few changes for mobile screens by Kizito */
    @media (max-width: 900px) {
        .contentWrapper, .leftContent, .stickers {
            display: block;
            overflow: scroll;
        }

        .rightContent {
            display: none;
        }
    }

    @media only screen and (max-device-width: 1024) {

        .rightContent {
            display: none;
        }

    }

</style>