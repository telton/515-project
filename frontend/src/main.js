import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import store from './store';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase-config';

// Pull in styles.
import './assets/scss/app.scss';

Vue.config.productionTip = false;

let app;
firebase.initializeApp(firebaseConfig);

// Only start the app once Firebase has been initialized.
firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App),
        }).$mount('#app');
    }
});
