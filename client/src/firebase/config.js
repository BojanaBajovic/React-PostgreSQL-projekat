import firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyA13JozaN8ZQndkRmz8_FdJhlzhqsf6gXw",
  authDomain: "uploadimages-b20ed.firebaseapp.com",
  databaseURL: "https://uploadimages-b20ed.firebaseio.com",
  projectId: "uploadimages-b20ed",
  storageBucket: "uploadimages-b20ed.appspot.com",
  messagingSenderId: "722887673951",
  appId: "1:722887673951:web:6f3a3dc5a29f9ec7"
};

const fire = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default { fire, storage }