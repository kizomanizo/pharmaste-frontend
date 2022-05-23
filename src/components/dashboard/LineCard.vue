<template>
    <ShadowLine
        :chart-options="options"
        :chart-data="data"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :width=400
        :height=100
        :plugin="plugin"
    />
</template>

<script setup lang="ts">
    // import { Line } from "vue-chartjs"
    import { Chart, Tooltip, LineElement, LineController, CategoryScale, LinearScale, PointElement, Legend, Title } from "chart.js"
    import { generateChart } from 'vue-chartjs'

    class ShadowWithLineController extends LineController {
        draw() {
            super.draw();
            const ctx = this.chart.ctx;
            const _stroke = ctx.stroke;
            ctx.stroke = function() {
                ctx.save();
                ctx.shadowColor = '#000000';
                ctx.shadowBlur = 10;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 4;
                _stroke.apply(this)
                ctx.restore();
            }
        }
    }
    ShadowWithLineController.defaults = LineController.defaults
    Chart.register(LineElement, Tooltip, LineController, CategoryScale, LinearScale, PointElement, Legend, Title, ShadowWithLineController)

    defineProps({
        chartId: { type: String, default: 'shadow-line' },
        datasetIdKey: { type: String, default:'label' },
        width: Number,
        height: Number,
        options: Object,
        data: Object,
        plugin: { type: Object, default: () => { null } },
        cssClasses: String,
        styles: Object,
    })

    const labels = ['Jumatatu', 'Jumanne', 'Jumatano', 'Alhamisi', 'Ijumaa', 'Jumamosi', 'Jumapili'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Mauzo',
            data: [32, 19, 22, 43, 34, 30, 28],
            backgroundColor: 'rgba(220, 220, 255, 1)',
            fill: false,
            hoverBorderColor: 'rgb(75, 192, 192)',
            borderColor: 'rgba(208, 208, 255, 1)',
            pointBorderColor: 'rgba(145, 100, 255, 1)',
            pointRadius: 6,
            pointBackgroundColor: 'rgba(145, 100, 255, 1)',
            tension: 0.3,
        }]
    }

    const options = {
        responsive: true,
        plugins: {
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

    const ShadowLine = generateChart('shadow-line', 'line', ShadowWithLineController)
</script>

<style>

</style>