<template>
  <div class="login-form">
    <b-card title="Connexion" class="login-form__card">
      <b-form @submit="onSubmit">
        <p class="login-form__card__error" v-if="trouble">Identifiants de connexion incorrects</p>
        <b-form-group
          id="input-group-1"
          label="Identifiant"
          label-for="id"
        >
          <b-form-input
            id="id"
            v-model="form.id"
            type="text"
            required
            placeholder="identifiant"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="password"
          label-for="password"
        >
          <b-form-input
            id="password"
            v-model="form.password"
            type="password"
            required
            placeholder="********"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Connexion</b-button>
      </b-form>
    </b-card>
  </div>
</template>
<script>
export default {
    name: 'login-form',
    data() {
      return {
        form: {
          id: '',
          password: '',
        },
      }
    },
    props: ['trouble'], 
    methods: {
      onSubmit(e) {
        e.preventDefault();
        this.$emit('login', this.form)
      },
    }
}
</script>
<style lang="scss" scoped>
.login-form {
  width: 350px;

  &__card {
    width: 100% !important;

    &__error {
      color: red;
    }
  }
}
</style>
