<template>
  <div class="login">
    <b-container>
      <b-alert v-model="error" dismissible variant="danger">
        <h3>Hiba</h3>
        <p>{{ errorMessage }}</p>
      </b-alert>
      <h3>Regisztráció</h3>
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
      <div class="my-3">
        <b-form-input
          v-model="passwordAgain"
          type="password"
          placeholder="Jelszó"
        ></b-form-input>
      </div>
      <b-button @click="signup">Regisztráció</b-button>
    </b-container>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  name: "Signup",
  data() {
    return { email: "", password: "", error: false, errorMessage: "" };
  },
  methods: {
    async signup() {
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        this.$router.replace("home");
      } catch (error) {
        console.log(error);
        this.errorMessage = error.message;
        this.error = true;
      }
    },
  },
};
</script>
