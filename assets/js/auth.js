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
 
   const preObject = document.getElementById('object');
   
     const dbRefObject = firebase.database().ref().child('P_usuario');
   
     dbRefObject.on('value', snap => {
       preObject.innerText = JSON.stringify(snap.val(), null, 3);
     });


 
   btnLogout.addEventListener('click', e => {
    
        firebase.auth().signOut();
    
      });
 
   firebase.auth().onAuthStateChanged(firebaseUser => {
     if(firebaseUser){
       console.log(firebaseUser);
       
       btnLogout.classList.remove('hide');
     }
     else{
       console.log('not logged in');
       window.alert('No a iniciado sesion');
       window.location.href = "../index.html";
       btnLogout.classList.add('hide');
     }
 
   });
   
 
 }());
 
  
 