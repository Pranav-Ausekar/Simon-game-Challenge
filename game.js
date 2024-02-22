
var buttonColors = ["red", "blue", "green", "yellow"];

// gamePattern array is an empty array 
var gamePattern = [];

// nextSequence function which generates random number between range 0 to 3... 
function nextSequence() {
    return Math.floor(Math.random() * 4);
}

// var randomNumber stores the random number returned from the function nestSequence... 
var randomNumber = nextSequence();   
// console.log(randomNumber);

var randomChosenColor = (buttonColors[randomNumber]); 

// this push method will add the randomChosenColor in the gamePattern Array... 
gamePattern.push(randomChosenColor);
// console.log(gamePattern);
