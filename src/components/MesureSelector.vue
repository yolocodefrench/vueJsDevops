<template>
	<b-form-select
		id="input-3"
		v-model="selected"
		:options="types"
		required
		class="mesure-selector"
		></b-form-select>
</template>
<script>
export default {
	name: 'mesure-selector',
	data() {
		return {
			selected: null,
			types: [
				{ text: 'Sélectionnez un paramètre', value: null },
				{ text: 'Température de cuve', value: 1 },
				{ text: 'Température extérieure', value: 2 },
				{ text: 'Poids du lait en cuve', value: 3 },
				{ text: 'Poids du produit fini', value: 4 },
				{ text: 'Mesure ph', value: 5 },
				{ text: 'mesure k+', value: 6 },
				{ text: 'concentration NaCl', value: 7 },
				{ text: 'Niveau bact salmonelle', value: 8 },
				{ text: 'Niveau bact e-coli', value: 9 },
				{ text: 'Niveau bact listéria', value: 10 },
			]
		};
	},
	watch: {
		selected: function(newValue) {
			this.$router.push({ name: 'mesure', params: { mesure: newValue, up: this.$router.currentRoute.params.up } })
		},
	}
}
</script>
<style lang="scss" scoped>
.mesure-selector {
	margin-bottom: 25px;
}
</style>



