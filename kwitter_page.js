//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC9DJYmfmSIMn2kUjokrzRh6aoIYqpj4Hw",
      authDomain: "kwitter-app-65270.firebaseapp.com",
      projectId: "kwitter-app-65270",
      storageBucket: "kwitter-app-65270.appspot.com",
      messagingSenderId: "416753147045",
      appId: "1:416753147045:web:3edf5371fed9a224ccc14c",
      measurementId: "G-FX1PYQDHWE"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message']
         like = message_data['like'];
         name_with_tag = "<h4> " + name +"img class='user_tick' src='tick_png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" +firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+"</span></button><hr>";

        row= name_with_tag + message_with_tag + like_button + span_with_tag;
        document.getElementById("output").innerHTML += row;

      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_like = Number(likes) + 1;
      console.log(update_likes);

      firebase.database().ref(room_name).childData(message_id).updateLike({
            like : updated_likes
       });
}
