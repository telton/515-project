import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import store from './store';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase-config';
import VeeValidate from 'vee-validate';
import Notifications from 'vue-notification';
import velocity from 'velocity-animate';
import { library } from '@fortawesome/fontawesome-svg-core';
import Icons from './fontawesome-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Pull in styles.
import './assets/scss/app.scss';

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.use(Notifications, { velocity });

// Add the icons to the library.
library.add(Icons);

// Register the fontawesome component.
Vue.component('fa', FontAwesomeIcon);

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
