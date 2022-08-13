
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyASRL1tXuxG1EsauQDNPTEBjebCU3H2Pb4",
      authDomain: "kwitternew-17968.firebaseapp.com",
      databaseURL: "https://kwitternew-17968-default-rtdb.firebaseio.com",
      projectId: "kwitternew-17968",
      storageBucket: "kwitternew-17968.appspot.com",
      messagingSenderId: "419389513673",
      appId: "1:419389513673:web:8e7e06eb5bd8eaa44ed218"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    username= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome "+ username + "!";

    function add_room(){
          room_name= document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
          localStorage.setItem("room_name", room_name);
          window.location= "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name- "+ Room_names);
      row= "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      //End code
      });});}
getData();