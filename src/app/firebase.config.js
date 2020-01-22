import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBhP7ctf_mjh2jVtCTRodsS1LDCNrRZqvM",
    authDomain: "testing-website-fproj.firebaseapp.com",
    databaseURL: "https://testing-website-fproj.firebaseio.com",
    projectId: "testing-website-fproj",
    storageBucket: "testing-website-fproj.appspot.com",
    messagingSenderId: "128084568524",
    appId: "1:128084568524:web:9ce5df6ec2673eacb79569"
};

firebase.initializeApp(firebaseConfig);