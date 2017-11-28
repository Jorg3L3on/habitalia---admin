(function(){
   // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAte73gqc2-vDHIHdHFjDzBS9sXY5Husu8",
    authDomain: "ars-const.firebaseapp.com",
    databaseURL: "https://ars-const.firebaseio.com",
    projectId: "ars-const",
    storageBucket: "ars-const.appspot.com",
    messagingSenderId: "737141710523"
  };

  firebase.initializeApp(config);
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  btnLogin.addEventListener('click', e => {

    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);

    promise.cath(e => console.log(e.message));

  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      window.location.href = "inicio/index.html";
    }
    else{
      console.log('not logged in');
    }

  });
  

}());

 
