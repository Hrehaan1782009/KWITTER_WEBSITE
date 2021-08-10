
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyC9DJYmfmSIMn2kUjokrzRh6aoIYqpj4Hw",
    authDomain: "kwitter-app-65270.firebaseapp.com",
    databaseURL: "https://kwitter-app-65270-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-65270",
    storageBucket: "kwitter-app-65270.appspot.com",
    messagingSenderId: "416753147045",
    appId: "1:416753147045:web:3edf5371fed9a224ccc14c",
    measurementId: "G-FX1PYQDHWE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });  
}