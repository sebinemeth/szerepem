<template>
  <div class="login">
    <b-container>
      <b-alert v-model="error" dismissible variant="danger">
        <h3>Hiba</h3>
        <p>{{ errorMessage }}</p>
      </b-alert>
      <h3>Bejelentkezés</h3>
      <b-form @submit="login">
        <div class="my-3">
          <b-form-input
            v-model="email"
            type="email"
            placeholder="Emailcím"
          ></b-form-input>
        </div>
        <div class="my-3">
          <b-form-input
            v-model="password"
            type="password"
            placeholder="Jelszó"
          ></b-form-input>
        </div>
        <b-button @click="login">Bejelentkezés</b-button>
      </b-form>
      <div class="my-3">
        <b-button @click="loginGoogle" variant="danger">Google</b-button>
      </div>
      vagy <router-link to="/signup">Regisztráció</router-link>
    </b-container>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return { email: "", password: "", error: false, errorMessage: "" };
  },
  methods: {
    async login(event, provider = null) {
      try {
        if (!provider)
          await firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password);
        else await firebase.auth().signInWithPopup(provider);
        this.$router.replace("home");
      } catch (error) {
        console.log(error);
        this.errorMessage = error.message;
        this.error = true;
      }
    },
    loginGoogle() {
      this.login(null, new firebase.auth.GoogleAuthProvider());
    },
  },
};
</script>
