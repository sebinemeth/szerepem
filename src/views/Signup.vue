<template>
  <div class="login">
    <b-container>
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
      <b-button @click="signup">Regisztráció</b-button>
    </b-container>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  name: "Signup",
  data() {
    return { email: "", password: "" };
  },
  methods: {
    async signup() {
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
