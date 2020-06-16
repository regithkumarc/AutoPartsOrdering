import firebase from 'firebase'
import 'firebase/storage'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCAiBV3OVLclz5J7oW7h-3RnDtFyUWNS8Y",
    authDomain: "auto-parts-ordering.firebaseapp.com",
    databaseURL: "https://auto-parts-ordering.firebaseio.com",
    projectId: "auto-parts-ordering",
    storageBucket: "auto-parts-ordering.appspot.com",
    messagingSenderId: "472116322824",
    appId: "1:472116322824:web:68e9b7aa18c5bb0e41e7bd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
    storage,firebase as default
  }