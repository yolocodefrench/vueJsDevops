<template>
  <div class="login">
    <login-form @login="login" :trouble="trouble"/>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import { apiPost, setJWT } from '@/utils/api';
import { loginPost } from '@/services/service';
import axios from 'axios';

export default {
  name: "login",
  components: {
    LoginForm
  },
  data() {
    return {
      trouble: false,
    }
  },
  mounted() {
  },
  methods: {
    async login(values) {
      const res = await loginPost(values.id, values.password);
      console.log(res);
      if(res.status === 200){
        const jsonDatas = JSON.parse(res.data);
        const token = jsonDatas.jwtAccess; 
        this.$store.commit('setJwtAccess', token);
        this.$store.commit('setIsConnected', true);
        setJWT(token);
        this.$router.push({name:'up',params:{up: 1 } });
      } else {
        this.trouble = true;
      }
      
    },
  }
};
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>

