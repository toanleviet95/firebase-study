import * as firebase from 'firebase/app';
import 'firebase/messaging';

const initializedFirebaseApp = firebase.initializeApp({
  messagingSenderId: '366685679510',
});

const messaging = initializedFirebaseApp.messaging();

export default messaging;
