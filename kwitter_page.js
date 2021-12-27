user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
const firebaseConfig = {
      apiKey: "AIzaSyBSUB3riWoJEjyb3LK6niFs7Qbnz2KbGdg",
      authDomain: "practice-778ae.firebaseapp.com",
      databaseURL: "https://practice-778ae-default-rtdb.firebaseio.com",
      projectId: "practice-778ae",
      storageBucket: "practice-778ae.appspot.com",
      messagingSenderId: "320126561978",
      appId: "1:320126561978:web:18a6a8f0ea0b80cf461c83",
      measurementId: "G-WZZ9FZ7X0S"
   };
   
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
function logout() {
      localStorage.setItem("user_name", user_name);
      window.location = "index.html"
   }


function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
         document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
         });
      });
   }
getData();
