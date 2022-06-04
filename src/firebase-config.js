// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDhFdCz-BIMjnldb76TXvhMMNphbN2ve4U',
  authDomain: 'carlo-the-ace.firebaseapp.com',
  projectId: 'carlo-the-ace',
  storageBucket: 'carlo-the-ace.appspot.com',
  messagingSenderId: '55697952098',
  appId: '1:55697952098:web:f6542f1c081df241f7703b',
  measurementId: 'G-V1PEL4E2WT'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = firebase.firestore()
const analytics = getAnalytics(app)
