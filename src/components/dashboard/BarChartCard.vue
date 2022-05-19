<template>
    <BarChart :chartData="data" :chartOptions="options" />
</template>

<script setup lang="ts">
    import { Chart, BarController, BarElement, Legend, Title } from "chart.js";
    import { BarChart } from "vue-chart-3";
    Chart.register(BarController, BarElement, Legend, Title)

    const labels = ['Dawa', 'Sindano', 'Diluents', 'Pampaz', 'Maji', 'Mafuta', 'Pafyumu']
    const data = {
        labels: labels,
        datasets: [{
            label: 'Makundi ya dawa zilizouzwa',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
            'rgba(222,221,254, 1)',
            'rgba(195,192,255, 1)',
            'rgba(196,184,243, 1)',
            'rgba(176,178,222, 1)',
            'rgba(212,172,247, 1)',
            'rgba(177,140,234, 1)',
            'rgba(204,204,208, 1)'
            ],
            hoverBackgroundColor: [
            'rgba(222,221,254, 0.3)',
            'rgba(195,192,255, 0.3)',
            'rgba(196,184,243, 0.3)',
            'rgba(176,178,222, 0.3)',
            'rgba(212,172,247, 0.3)',
            'rgba(177,140,234, 0.3)',
            'rgba(204, 204, 208, 225)'
            ],
            borderWidth: 0,
            barThickness: 30,
            borderRadius: 10,
            pointStyle: 'circle'
        }]
    }

    const options = {
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
        },
        // usePointStyle: true,
        // pointStyle: 'circle'
    }
</script>

<style>
.card canvas {
    height: 300px;
}
</style>