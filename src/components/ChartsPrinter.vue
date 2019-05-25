<template>
  <apexchart type=line height=350 :options="chartOptions" :series="series" /> 
</template>
<script>
import VueApexCharts from 'vue-apexcharts'

export default {
	name: 'charts-printer',
	components: {
		'apexchart': VueApexCharts,
	},
	props: ['categories', 'datas'],
	data() {
		return {
			series: [{
				name: "Desktops",
				data: [...this.datas]
			}],
			chartOptions: {
				chart: {
					toolbar: {
						show: false,
					},
					height: 350,
					zoom: {
						enabled: false
					}
				},
				dataLabels: {
					enabled: false
				},
				stroke: {
					curve: 'straight'
				},
				title: {
					text: 'Product Trends by Month',
					align: 'left'
				},
				grid: {
					row: {
						colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
						opacity: 0.5
					},
				},
				xaxis: {
					categories: [...this.categories],
				}
			}
		};
	},
	created() {
	}
}
</script>
<style lang="scss" scoped>

</style>
