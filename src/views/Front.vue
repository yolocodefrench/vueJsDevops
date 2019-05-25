<template>
  <div class="front">
    <div class="router-link-container">
        <div>
          <router-link variant="primary" to="/1">UP 1</router-link> |
          <router-link variant="primary" to="/2">UP 2</router-link> | 
          <router-link variant="primary" to="/3">UP 3</router-link> | 
          <router-link variant="primary" to="/4">UP 4</router-link> | 
          <router-link variant="primary" to="/5">UP 5</router-link>
        </div>
      </div>
    <div class="front__selector">
      <mesure-selector />
    </div>
    <section class="front__charts">
      <router-view />
    </section>
    
  </div>
</template>
<script>
import MesureSelector from '@/components/MesureSelector.vue';

export default {
  name: 'front',
  components: {
    MesureSelector,
  },
}
</script>
<style lang="scss" scoped>
.front {
  display: flex;
  flex-direction: column;
  align-items: center;

  .router-link-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
    & > div {
      margin-bottom: 25px;
    }
  }

  &__selector {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    & > * {
      width: 300px;
    }
  }
  &__charts > div {
    width: 100vw;
    @media screen and (min-width: 1080px) {
      width: 80vw;
    }
  }
}
</style>

