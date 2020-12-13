<template>
  <div class="home">
    <b-container>
      <h3>Hello</h3>
      <b-button @click="logout">Kijelentkezés</b-button>
    </b-container>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",
  components: {},
  methods: {
    async logout() {
      await firebase.auth().signOut();
      this.$router.replace("login");
    },
  },
};
</script>
