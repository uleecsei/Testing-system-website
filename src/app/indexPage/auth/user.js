import firebase from 'firebase/app';

// const auth = {
//     state: {
//         user: null
//     },
//     mutations: {},
//     actions: {
//         async registerUser (commit, email, password){
//             const user = await firebase.auth().createUserWithEmailAndPassword(email,password);
//             console.log(user);
//         }
//     },
//     getters: {
//         user (state) {
//             return state.user;
//         },
//         checkUser (state) {
//             return state.user !== null;
//         }
//     }
// }
let form = document.querySelector('.login__form');
let email = document.querySelector('.login__form__email');
let pass = document.querySelector('.login__form__password');

form.onsubmit = function () {
    firebase.auth().createUserWithEmailAndPassword(email.value, pass.value).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
}

// async function friend (email, password) {
//     const user = await firebase.auth().createUserWithEmailAndPassword(email,password);
//     console.log(user);
// }