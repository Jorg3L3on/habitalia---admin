(function(){
   // Initialize Firebase
   var config = {
    apiKey: "AIzaSyC3mBXCEbPXUbj2QcMX5Gdjue3mY8_B4o4",
    authDomain: "habitalia-1510534001961.firebaseapp.com",
    databaseURL: "https://habitalia-1510534001961.firebaseio.com",
    projectId: "habitalia-1510534001961",
    storageBucket: "habitalia-1510534001961.appspot.com",
    messagingSenderId: "403256057328"
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

    promise.catch(e => console.log(e.message));

  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
      window.location.href = "inicio/index.html";
      btnLogout.classList.remove('hide');
    }
    else{
      console.log('No a iniciado sesion');
      //btnLogout.classList.add('hide');
    }

  });
  

}());

 
