// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey:"AIzaSyCLBUskpmh7xkCCvP0oYBlcns7_7y1Dtsk",
  authDomain: "dhishna-1ae04.firebaseapp.com",
  databaseURL: "https://dhishna-1ae04.firebaseio.com",
  projectId: "dhishna-1ae04",
  storageBucket: "dhishna-1ae04.appspot.com",
  messagingSenderId: "569808756750"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var caption = getInputVal('caption');
  var namec = getInputVal('namec');
  var phone = getInputVal('phone');
  var description = getInputVal('description');

  // Save message
  saveMessage(name, caption, namec, phone, description);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, caption, namec, phone, description){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    caption:caption,
    namec:namec,
    phone:phone,
    description:description
  });
}