import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "./style/custom.scss";
import firebase from 'firebase';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

let config = {
  apiKey: "AIzaSyChvUEyucyEiibQGK_MmoUMUntxg4PvDqU",
  authDomain: "szerepem.firebaseapp.com",
  databaseURL: "https://szerepem-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "szerepem",
  storageBucket: "szerepem.appspot.com",
  messagingSenderId: "540928352870",
  appId: "1:540928352870:web:b2080deef07f32447a03a7",
  measurementId: "G-FDXME5RRXM"
};
firebase.initializeApp(config);

let app = null;

firebase.auth().onAuthStateChanged(() => {
  if (!app)
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
})

