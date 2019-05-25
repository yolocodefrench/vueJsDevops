<template>
	<b-navbar toggleable="lg" type="dark" variant="info" class="header-vue">
		<b-navbar-brand href="#">Au bon beurre</b-navbar-brand>
		<b-navbar-nav class="ml-auto">
			<b-nav-item v-if="isConnected" @click="deconnect()">Logout</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
import { mapState } from 'vuex';
export default {
	name: 'header-vue',
	computed: mapState(['isConnected']),
	methods: {
		deconnect() {
			this.$store.commit('reset');
			this.$router.replace({name:'login'});
		}
	}
}
</script>
<style lang="scss" scoped>
.header-vue {
	margin-bottom: 25px;
}
</style>
