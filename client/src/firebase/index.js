import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA13JozaN8ZQndkRmz8_FdJhlzhqsf6gXw",
  authDomain: "uploadimages-b20ed.firebaseapp.com",
  databaseURL: "https://uploadimages-b20ed.firebaseio.com",
  projectId: "uploadimages-b20ed",
  storageBucket: "uploadimages-b20ed.appspot.com",
  messagingSenderId: "722887673951",
  appId: "1:722887673951:web:6f3a3dc5a29f9ec7"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}
