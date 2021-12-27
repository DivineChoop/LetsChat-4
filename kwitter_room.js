user_name = localStorage.getItem("user_name");
document.getElementById("welcometext").innerHTML = "Welcome " + user_name + "!"

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

function addRoom() {
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
      purpose: "adding room"
   });

   localStorage.setItem("room_name", room_name);

   window.location = "kwitter_page.html"
}

function getData() {
   firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
         childKey = childSnapshot.key;
         Room_names = childKey;
         //Start code
         console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;
         //End code
      });
   });
}
getData();

function logout() {
   localStorage.setItem("user_name", user_name);
   window.location = "index.html"
}

function redirectToRoomName(name) {
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}
