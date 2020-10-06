var message = document.getElementById("mainMsg");
var submitBtn = document.getElementById("submitBtn");
function submitClick(){
    var firebaseRef = firebase.database().ref();
    var messageText = message.value;
    firebaseRef.child("message").set(value);
}