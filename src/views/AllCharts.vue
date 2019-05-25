<template>
	<div>
		<template v-for="up in upDatas">
			<charts-printer :datas="up.datas" :categories="up.time" :key="up.id"/>
		</template>
	</div>
</template>
<script>
import ChartsPrinter from '@/components/ChartsPrinter.vue';
import { getDatasFromUpWithMesures } from '@/services/service';

export default {
  name: 'all-charts',
  components: {
		ChartsPrinter,
  },
  data() {
	  return {
		  upDatas: []
	  };
  },
  created() {
	  getDatasFromUpWithMesures(1, 1).then((res)=>{
			  this.upDatas = JSON.parse(res.data);
		  }).catch((error)=>{
			  console.log(error)
		  });
	  setInterval(()=>{
		  getDatasFromUpWithMesures(1, 1).then((res)=>{
			  this.upDatas = JSON.parse(res.data);
		  }).catch((error)=>{
			  console.log(error)
		  });
	  }, 400);
  },
  methods: {

  },
};
</script>
