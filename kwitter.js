function AddUser() {
   user_name = document.getElementById("user_name").value;
   if (user_name == "") {
      document.getElementById("ErrorLabel").innerHTML="Error: Enter Username"
   }
   else {
      localStorage.setItem("user_name", user_name);
      window.location = "kwitter_room.html"
   }
}
