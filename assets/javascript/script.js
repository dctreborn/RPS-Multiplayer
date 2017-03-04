// Initialize Firebase
var config = {
  apiKey: "AIzaSyC4Fl4hh0CHqkgCZYIien2m0HRZUI81TZY",
  authDomain: "rukarps.firebaseapp.com",
  databaseURL: "https://rukarps.firebaseio.com",
  storageBucket: "rukarps.appspot.com",
  messagingSenderId: "96724550699"
};
firebase.initializeApp(config);

var message;
var player1;
var player2;
var choices = ["rock","paper","scissors","snake","spock"];
var p1Wins;
var p2Wins;
var p1Losses;
var p2Losses;

//display RPS iamges; to be clicked and taken as choice
function displayChoices(){
  $("#p1-rps").empty();
  $("#p2-rps").empty();

  var length = choices.length;

  for (var i = 0; i < length; i++) {
    var img = $("<img>");
    var span = $("<span>");
    img.attr("src", "assets/images/" + choices[i] + ".png");
    span.append(img);
    $("#p1-rps").append(span);
  }
  for (var i = 0; i < length; i++) {
    var img = $("<img>");
    var span = $("<span>");
    img.attr("src", "assets/images/" + choices[i] + ".png");
    span.append(img);
    $("#p2-rps").append(span);
  }

}

//display chat message
function displayMessage(){

}

//select RPS image
function selectRPS() {

}

displayChoices();