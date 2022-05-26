<script setup lang="ts">
    import DashboardCard from "@/components/dashboard/InfoCard.vue"
    // import LineChartCard from "@/components/dashboard/LineChartCard.vue"
    import LineCard from "@/components/dashboard/LineCard.vue"
    import BarChartCard from "../components/dashboard/BarChartCard.vue"
    const percent = -12
    const stock = 21
    const days = 88
</script>                                                                                                                       

<template>
    <div class="stickers    ">
        <DashboardCard>
            <template #biggerText>Mauzo wiki hii</template>
            <template #mutedText>Taarifa za mauzo ya wiki.</template>
            <template #cardNumber>55</template>
            <template #positive v-if="percent>=0">{{ percent }}</template>
            <template #negative v-else>{{ percent }}</template>
        </DashboardCard>
        <DashboardCard>
            <template #biggerText>Mzigo uliobaki</template>
            <template #mutedText>Kiasi cha mzigo uliopo stoo.</template>
            <template #cardNumber>874</template>
            <template #positive v-if="stock>=0">{{ stock }}</template>
            <template #negative v-else>{{ stock }}</template>
        </DashboardCard>
        <DashboardCard>
            <template #biggerText>Siku za kazi</template>
            <template #mutedText>Siku ambazo duka lilikuwa wazi.</template>
            <template #cardNumber>190</template>
            <template #positive v-if="days>=0">{{ days }}</template>
            <template #negative v-else>{{ days }}</template>
        </DashboardCard>
    </div>
    <div class="card">
        <LineCard />
    </div>
    <div class="card">
        <BarChartCard />
    </div>
</template>

<style>

.stickers {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 10px;
}

.card {
    margin: 20px 0;
}

.firstCard {
    margin-top: -10px;
}

</style>
