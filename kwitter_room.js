
var firebaseConfig = {
      apiKey: "AIzaSyC_lDg7m1pQlXqdHyyN_OmqZvR7x2bqcqU",
      authDomain: "main-100f2.firebaseapp.com",
      projectId: "main-100f2",
      storageBucket: "main-100f2.appspot.com",
      messagingSenderId: "545137517299",
      appId: "1:545137517299:web:ca471eb866fb57bfac4d86",
      measurementId: "G-DC9JS8WKF8"
    };
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innHTML="Welcome"+user_name+"!";



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
      //Start code
      console.log("room_name = " + room_name);
      row = "<div class='room_name' id="+room_name+"onclick='redirecttoroomname(this.id)'>#"+room_name+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
  }
  function redirecttoroomname(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
      
  }
  function logout()
  {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
  }