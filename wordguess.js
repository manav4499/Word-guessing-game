"use strict";

const words = ["Love", "Happy", "Angry", "Excited", "Tired"]; 
var currentWord; 


var wordDiv = document.getElementById("word");
var inputBox = document.getElementById("letter");
var startButton = document.getElementById("startGame");
var msgBox = document.getElementById("msgBox");

var correctLetters = 0; 

function startGame(){
  inputBox.style.display = "block"; 
  wordDiv.innerHTML = ""; 
  msgBox.innerHTML = "";
  inputBox.disabled = false; 
  inputBox.focus();
  currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase(); 
  correctLetters = 0; 


  for (let i = 0; i < currentWord.length; i++) {
    var letterDiv = document.createElement("div");
    var starDiv = document.createElement("div");
    var lineDiv = document.createElement("div");
    letterDiv.className = "wordBox";
    starDiv.className = "wordBox-letter";
    starDiv.innerText = "*";
    lineDiv.className = "wordBox-line";
    letterDiv.appendChild(starDiv);
    letterDiv.appendChild(lineDiv);
    wordDiv.appendChild(letterDiv);
  }
}

function findLetterIndexes(letter) {
  const indexes = [];
  let i = 0;
  while (i < currentWord.length) {
    if (currentWord[i] === letter) {
      indexes.push(i);
      correctLetters++;
    }
    i++;
  }
  return indexes;
}

startButton.addEventListener("click", startGame); 
inputBox.addEventListener("input", () =>{setTimeout( function(){
  const guessedLetter = inputBox.value.toUpperCase();
    inputBox.value = ""; 
    
    const indexes = findLetterIndexes(guessedLetter);
    
    if (indexes.length > 0){
      const letterDivs = wordDiv.querySelectorAll(".wordBox-letter");
      indexes.forEach( a => {
        console.log(a, guessedLetter);
        letterDivs[a].innerText = guessedLetter;
      });
    }
    
    if (correctLetters === currentWord.length){
      msgBox.innerHTML = "You guessed the word correctly!";
      inputBox.disabled = true; 
    }
}, 300);}); 

