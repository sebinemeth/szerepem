<template>
  <div class="home">
    <b-container>
      <h3>Hello {{ user.name || user.email }}</h3>
      <b-button @click="logout">Kijelentkezés</b-button>
    </b-container>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",
  components: {},
  computed: {
    user() {
      var user = firebase.auth().currentUser;
      if (user != null)
        return {
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
          emailVerified: user.emailVerified,
          uid: user.uid,
        };
      return {};
    },
  },
  methods: {
    async logout() {
      await firebase.auth().signOut();
      this.$router.replace("login");
    },
  },
};
</script>
