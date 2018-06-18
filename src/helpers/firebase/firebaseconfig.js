/* eslint-disable */
import {initializeApp} from 'firebase'
import * as firebase from 'firebase'

// Initialize Firebase
const config = initializeApp({
    apiKey: "AIzaSyCTo631_0YIbjadVlYxgytOjmfnw0Fl07g",
    authDomain: "cup-word-2018.firebaseapp.com",
    databaseURL: "https://cup-word-2018.firebaseio.com",
    projectId: "cup-word-2018",
    storageBucket: "cup-word-2018.appspot.com",
    messagingSenderId: "85323183305"
  })

  export const database = config.database();
  export const namesRef = database.ref('jogadores')
  export const userRef = database.ref('user')
