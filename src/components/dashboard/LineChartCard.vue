<template>
    <div>
        <LineChart ctx :typeof="Shadow" :chartData="data" :options="options"/>
        
    </div>
</template>

<script setup lang="ts">
    import { Chart, LineElement, LineController, CategoryScale, LinearScale, PointElement, Legend, Title } from "chart.js"
    import { LineChart } from "vue-chart-3";
    import { } from 'vue-chart-3'
    class Shadow extends LineController {
        draw() {
            super.draw();
            const ctx = this.chart.ctx;
            const _stroke = ctx.stroke;
            console.log('fuc')
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
    Shadow.id = 'shadowLine'
    Shadow.defaults = LineController.defaults

    Chart.register(LineElement, LineController, CategoryScale, LinearScale, PointElement, Legend, Title, Shadow)
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
            fill: false,
            hoverBorderColor: 'rgb(75, 192, 192)',
            borderColor: 'rgba(208, 208, 255, 1)',
            pointBorderColor: 'rgba(145, 100, 255, 1)',
            pointRadius: 6,
            pointBackgroundColor: 'rgba(145, 100, 255, 1)',
            tension: 0.3,
            height: 200
        }]
    }

    const options = { responsive: true, height: 200 }
</script>

<style>
.card canvas {
    height: 300px;
}
</style>