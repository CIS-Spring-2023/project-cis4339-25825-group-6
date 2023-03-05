<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  props: {
    label: {
      type: Array
    },
    chartData: {
      type: Array
    }
  },
  async mounted() {
    await new Chart(this.$refs.donutChart, {
    type: 'doughnut',
    data: {
        labels: [
        'Red',
        'Blue',
        'Yellow'
        ],
    datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
    }]
    },
})},}
</script>
<template>
    <div class="shadow-lg rounded-lg overflow-hidden">
      <canvas class="p-10" ref="donutChart"></canvas>
    </div>
</template>