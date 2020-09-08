import * as firebase from 'firebase'
import token from "./firebaseToken";

const firebaseConfig = {
    apiKey: token,
    authDomain: 'lent-grocery-list.firebaseapp.com',
    databaseURL: 'https://lent-grocery-list.firebaseio.com',
    projectId: 'lent-grocery-list',
    storageBucket: 'lent-grocery-list.appspot.com',
    messagingSenderId: '679079840406',
    appId: '1:679079840406:web:773d73899b9adb82e450b7',
    measurementId: 'G-J9ZY2G1470'
}

export const fireBase = firebase.initializeApp(firebaseConfig)

export const fireStore = firebase.firestore()