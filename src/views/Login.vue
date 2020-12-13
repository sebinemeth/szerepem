<template>
  <div class="login">
    <b-container>
      <h3>Bejelentkezés</h3>
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
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
