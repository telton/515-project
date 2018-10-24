import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  currentUser() {
    return firebase.auth().currentUser;
  },
  createUser(email, password) {
    return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);
  },
  login(email, password) {
    return firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
  },
  resetPassword(email) {
    return firebase
            .auth()
            .sendPasswordResetEmail(email);
  }
};