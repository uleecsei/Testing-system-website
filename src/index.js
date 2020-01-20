import "@babel/polyfill";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

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

import './app/Router.js';

import './app/indexPage/header/header.css';
import './app/indexPage/header/header.js';

import './app/indexPage/slider/slider.css';
import './app/indexPage/slider/slider.js'

import './app/indexPage/main/main.css';
import './app/indexPage/main/main.js';

import './app/indexPage/footer/footer.css';

import './app/indexPage/auth/login/login.css';
import './app/indexPage/auth/login/login.js'

import './app/Breadcrumbs.js';

import './app/contentPage/main/main_content.css';

import './app/contactsPage/contacts.css';

import './app/indexPage/auth/user.js';


let form = document.querySelector('.login__form');
console.log(form);