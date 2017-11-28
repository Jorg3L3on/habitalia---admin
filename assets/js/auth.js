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
 
  
 