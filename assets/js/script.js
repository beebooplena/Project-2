const playerResult = document.getElementById('player-one');
const computerResult = document.getElementById('player-two');
const computerChoice = document.getElementById('computer-player');
const playerChoice = document.getElementById('player');
const resetBtn = document.getElementById('reset');
const imageComputer = document.getElementById('computer-image');
const imagePlayer = document.getElementById('player-image');
const buttons = document.getElementsByClassName('choices');
const divPlayerImage = document.getElementById('div-player-image');
const divComputerImage = document.getElementById('div-computer-image');








for (let button of buttons) {
    button.addEventListener("click",
        function (e) {

            let playerChoice = e.target.dataset.choice;

            runGame(playerChoice);


        });
}

function runGame(playerChoice) {
    let decisionButton = playerChoice;

    if (decisionButton === "0") {
        divPlayerImage.style.background = "url(assets/images/paper.jpg)";
    } else if (decisionButton === "1") {
        divPlayerImage.style.background = "url(assets/images/scissors.jpg)";
    } else if (decisionButton === "2") {
        divPlayerImage.style.background = "url(assets/images/stone.jpg)";
    }
    console.log("hou")
    let computerChoice = generateComputerChoice()
    compareChoice(computerChoice, decisionButton)

}

function playerScore() {

    let playerResult = parseInt(document.getElementById("player-one").innerText);
    document.getElementById("player-one").innerText = ++playerResult;
}
console.log("iiii");

function computerScore() {
    let computerResult = parseInt(document.getElementById("player-two").innerText);
    document.getElementById("player-two").innerText = ++computerResult;

}

function generateComputerChoice() {
    console.log("hei")
    let ranNum = Math.floor(Math.random() * 3);
    if (ranNum == 0) {
        divComputerImage.style.background = "url(assets/images/paper.jpg)";
    } else if (ranNum === 1) {
        divComputerImage.style.background = "url(assets/images/scissors.jpg)";
    } else if (ranNum === 2) {
        divComputerImage.style.background = "url(assets/images/stone.jpg)";
    }
    return ranNum



}

function compareChoice(computerChoice, decisionChoice) {
    if (decisionChoice == computerChoice) {
       
    } else if (decisionChoice == 1 && computerChoice == 0) {
        
        playerScore()
    } else if (decisionChoice == 0 && computerChoice == 2) {
        
        playerScore()
    } else if (decisionChoice == 2 && computerChoice == 1) {
       
        playerScore()
    } else if (decisionChoice == 2 && computerChoice == 0) {
       
        computerScore()
    } else if (decisionChoice == 0 && computerChoice == 1) {
        
        computerScore()
    } else if (decisionChoice == 1 && computerChoice == 2) 
    computerScore()

console.log("aaa");
if (decisionChoice == computerChoice) {
    alert("It`s a draw");
} else if (decisionChoice == 1 && computerChoice == 0) {
    alert("You Win!");
   
} else if (decisionChoice == 0 && computerChoice == 2) {
    ("You Win!");
   
} else if (decisionChoice == 2 && computerChoice == 1) {
    alert("You Win!");
   
} else if (decisionChoice == 2 && computerChoice == 0) {
    alert("You Loose!");
    
} else if (decisionChoice == 0 && computerChoice == 1) {
    alert("You Loose!");
    
} else if (decisionChoice == 1 && computerChoice == 2) alert("You Loose!");

}



;