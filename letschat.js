var firebaseConfig = {
    apiKey: "AIzaSyA_2DNGs3pFM8jScU2-faqRIWUxDhfx-vs",
    authDomain: "letschat-287b5.firebaseapp.com",
    projectId: "letschat-287b5",
    storageBucket: "letschat-287b5.appspot.com",
    messagingSenderId: "883752021615",
    appId: "1:883752021615:web:8d900e2aff4a1ccc67279a",
    measurementId: "G-94YLX619GS"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);
firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
});
    window.location = "letschat_room.html";
}