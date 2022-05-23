<template>
    <BarChart :chartData="data" :options="options" />
</template>

<script setup lang="ts">
    import { Chart, BarController, BarElement, Legend, Title } from "chart.js";
    import { BarChart } from "vue-chart-3";
    Chart.register(BarController, BarElement, Legend, Title)

    const data = {
        labels: ['Dawa', 'Sindano', 'Diluents', 'Pampaz', 'Maji', 'Mafuta', 'Pafyumu'],
        datasets: [{
            label: 'Data',
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
            pointStyle: 'circle',
        }]
    }

    const options = {
        responsive: true,
        layout: { padding: 20 },
        plugins: {
            legend: {
                display: true,
                position: 'right',
                title: {
                    color: 'red',
                    text: 'Jedwali'
                },
                labels: {
                    generateLabels: () => {
                        const dataset = data.datasets[0]
                        const labels = data.labels
                        return labels.map((label, index) => ({
                            text: label,
                            fillStyle: dataset.backgroundColor[index],
                            strokeStyle: dataset.backgroundColor[index],
                            fontColor: '#666',
                        }))
                    },
                    usePointStyle: true,
                    pointStyle: 'circle',
                    font: {
                        size: 20,
                        lineHeight: 1.6,
                        family: "Nunito-Regular",
                        weight: "normal"
                    },
                    padding: 40,
                    margin: 20,
                }
            },
            tooltip: {
                borderWidth: 2,
                borderColor: 'rgba(145, 100, 255, 1)',
                backgroundColor: 'rgba(240, 240, 255, 1)',
                titleColor: 'rgba(145, 100, 255, 1)',
                titleFont: {
                    font: {
                        type: 'Nunito-Regular',
                        weight: 'bold'
                    }
                },
                bodyColor: 'rgba(175, 145, 255, 1)'
            }
        }
    }

</script>

<style>
    .card canvas {
        height: 300px;
    }
</style>