const playerResult = document.getElementById('player-one');
const computerResult = document.getElementById('player-two');
const computerChoice = document.getElementById('computer-player');
const playerChoice = document.getElementById('play-screen');
const resetBtn = document.getElementById('reset');
const imageComputer = document.getElementById('computer-image');
const imagePlayer = document.getElementById('player-image');
const choices = ["rock", "paper", "scissors"];


document.addEventListener("DOMContentLoaded",function() {
    let buttons = document.getElementsByTagName("button");
    button.addEventListener("click", function(){
        if (this.getAttribute( "data-choice") == 0)
        {runGame();}else if(this.getAttribute( "data-choice") == 1)
        {runGame();}else(this.getAttribute( "data-choice") == 2)
        {runGame();}

function runGame() {
    generateChoice()
    compareChoice()
}

function generateComputer() {
    ranNum = Math.floor(Math.random() * 2) + 1;
    if (ranNum == 0){ computerChoice = "data-choice = 0";}
    else if(ranNum == 1){computerChoice = "data-choice = 1";}
    else if(ranNum == 2){computerChoice = " data-choice = 2";}
}