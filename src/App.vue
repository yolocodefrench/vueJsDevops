<template>
  <div id="app">
      <header-vue></header-vue>
      
    <router-view />
  </div>
</template>
<script>
import HeaderVue from '@/components/HeaderVue.vue';

export default {
  name: 'app',
  components: {
    HeaderVue
  },
}
</script>
<style lang="scss">
.router-link-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  & > div {
    margin-bottom: 25px;
  }
}
</style>
