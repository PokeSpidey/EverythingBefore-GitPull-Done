import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAb7dgxPLDbAvad2WthPeIFqs6fAjnq4Eo",
    authDomain: "voting-ting.firebaseapp.com",
    databaseURL: "https://voting-ting-default-rtdb.firebaseio.com",
    projectId: "voting-ting",
    storageBucket: "voting-ting.appspot.com",
    messagingSenderId: "464670005968",
    appId: "1:464670005968:web:1e6e11ddc93909aaa05cd5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();