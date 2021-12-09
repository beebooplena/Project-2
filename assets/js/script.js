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
        divPlayerImage.style.background = "url(/assets/images/paper.jpg)";
    } else if (decisionButton === "1") {
        divPlayerImage.style.background = "url(/assets/images/scissors.jpg)";
    } else if (decisionButton === "2") {
        divPlayerImage.style.background = "url(/assets/images/stone.jpg)";
    }
    console.log("hou")
    let computerChoice = generateComputerChoice()
    compareChoice(computerChoice, decisionButton)

}

function playerScore() {

    let playerResult = parseInt(document.getElementById("player-one").innerText);
    document.getElementById("player-one").innerText = ++playerResult;
   }

   function computerScore() {
    let computerResult = parseInt(document.getElementById("player-two").innerText);
 document.getElementById("player-two").innerText = ++computerResult;
console.log(iiii);
}

    function generateComputerChoice() {
        console.log("hei")
        let ranNum = Math.floor(Math.random() * 3);
        if  (ranNum == 0) {
            divComputerImage.style.background = "url(/assets/images/paper.jpg)";
        } else if (ranNum === 1) {
            divComputerImage.style.background = "url(/assets/images/scissors.jpg)";
        } else if (ranNum === 2) {
            divComputerImage.style.background = "url(/assets/images/stone.jpg)";
        }
        return ranNum



    }

    function compareChoice(computerChoice, playerChoice) { 
        if (playerChoice == computerChoice){playerResult ="It`s a draw";
      } else if(playerChoice == 1 && computerChoice == 0){playerResult = "You Win!";
    playerScore()}
        

    }
;