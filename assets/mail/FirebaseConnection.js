var firebaseConfig = {
    apiKey: "AIzaSyBU26mGS4r_HNB3pbQabDT5tj6WE18ul8g",
    authDomain: "mywebsitecontacts-d2f1b.firebaseapp.com",
    databaseURL: "https://mywebsitecontacts-d2f1b.firebaseio.com",
    projectId: "mywebsitecontacts-d2f1b",
    storageBucket: "mywebsitecontacts-d2f1b.appspot.com",
    messagingSenderId: "71025205829",
    appId: "1:71025205829:web:2a084235642fbb87f5792c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('contactformmessages');
$('#contactForm').submit(function(e) {
    e.preventDefault();

    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('#name').val(),
        email: $('#email').val(),
        subject: $('#subject').val(),
        message: $('#message').val()
    });

    $('.success-message').show();

    $('#contactForm')[0].reset();
});