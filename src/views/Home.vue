<template>
  <div class="home">
    <b-container>
      <b-card>
        <b-media>
          <template #aside>
            <b-avatar :src="user.photoUrl" />
          </template>

          <h5 class="mt-0">{{ user.name || "névtelen" }}</h5>
          <p class="mb-0">
            {{ user.email }}
            <b-icon-check-circle-fill
              v-if="user.emailVerified"
              variant="success"
            />
            <template v-else>
              <b-icon-exclamation-circle-fill variant="danger" /><br />
              <b-link @click="verifyEmail">
                Email cím igazolása
              </b-link>
            </template>
          </p>
        </b-media>
      </b-card>
      <div class="mt-3 text-right">
        <b-button @click="logout" variant="light">Kijelentkezés</b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",
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
    async verifyEmail() {
      const user = firebase.auth().currentUser;
      try {
        user.sendEmailVerification();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
