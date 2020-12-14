<template>
  <div class="login">
    <b-container>
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
    </b-container>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return { email: "", password: "" };
  },
  methods: {
    async login() {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        this.$router.replace("home");
      } catch (error) {
        console.log(error);
      }
    },
    async loginGoogle() {
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await firebase.auth().signInWithPopup(provider);
        // var token = result.credential.accessToken;
        // var user = result.user;
        console.log(result);
        this.$router.replace("home");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
