import React, { useState } from 'react';
import firebase from "firebase/app";
import firebaseConfig from './firebase.config';

import "firebase/auth";


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const Login = () => {
  const [user, setUser] = useState({})

  var provider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () =>{
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      var user = result.user;
      console.log(user);
      setUser(user);
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorCode, errorMessage, email);
    });


  }
  return (
    <div className="form-deign">
      <button onClick={handleGoogleSignIn} className="btn btn-primary">Sign in with google</button>
    </div>
  );
};

export default Login;