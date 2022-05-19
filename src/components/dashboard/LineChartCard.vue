<template>
    <div>
        <LineChart :chartData="data" />
    </div>
</template>

<script setup lang="ts">
    import { Chart, LineElement, LineController, CategoryScale, LinearScale, PointElement, Legend, Title } from "chart.js"
    import { LineChart } from "vue-chart-3";
    Chart.register(LineElement, LineController, CategoryScale, LinearScale, PointElement, Legend, Title)

/**
 * TODO: Fix this to TS ready state
**/
    const labels = ['Jumatatu', 'Jumanne', 'Jumatano', 'Alhamisi', 'Ijumaa', 'Jumamosi', 'Jumapili'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Mauzo ya wiki hii kwa kila siku.',
            data: [32, 19, 22, 43, 34, 30, 28],
            backgroundColor: 'rgba(220, 220, 255, 1)',
            fill: true,
            hoverBorderColor: 'rgb(75, 192, 192)',
            borderColor: 'rgba(208, 208, 255, 1)',
            pointBorderColor: 'rgba(145, 100, 255, 1)',
            pointRadius: 6,
            pointBackgroundColor: 'rgba(145, 100, 255, 1)',
            tension: 0.3,
            height: 200
        }]
    };
</script>

<style>
.card canvas {
    height: 300px;
}
</style>