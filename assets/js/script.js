const playerResult = document.getElementById('player-one');
const computerResult = document.getElementById('player-two');
const computerChoice = document.getElementById('computer-player');
const playerChoice = document.getElementById('player');
const resetBtn = document.getElementById('reset');
const imageComputer = document.getElementById('computer-image');
const imagePlayer = document.getElementById('player-image');
const buttons = document.getElementsByClassName('choices');







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
        let img = document.createElement("img");
        img.src = "assets/images/paper.jpg";
        img.style.width = "80%".top = "50%".hight = "50%".left = "250px";
       
        document.getElementById('player').appendChild(img);
       
    } else if (decisionButton === "1") {
        let img = document.createElement("img");
        img.src = "assets/images/scissors.jpg";
        img.setAttribute("style", "left: 50px", "size = 20%");
        document.getElementById('player').appendChild(img);

    } else if (decisionButton === "2") {
        let img = document.createElement("img");
        img.src = "assets/images/stone.jpg";
        img.setAttribute("style", "left: 50px", "size = 20%");
        document.getElementById('player').appendChild(img);
    }




    generateChoice()
    compareChoice()
    computerChoice()

    function reset(event) {
         // Stops the page from refreshing
        let screen = document.getElementById("player");
        screen.innerHTML = '';
    }

    
        
     




    function generateChoice() {
        let ranNum = Math.floor(Math.random() * 3);
        if (ranNum == 0) {
            computerChoice = "data-choice = 0";

        } else if (ranNum == 1) {
            computerChoice = "data-choice = 1";
        } else if (ranNum == 2) {
            computerChoice = " data-choice = 2";
        }
    }

    function compareChoice() {
        if (playerChoice === computerChoice) {
            playerResult,
            computerResult = "It`s a draw!";
        }
        else if (playerChoice == "data-choice = 0" && computerChoice == "data-choice = 2") {
            playerResult = "You Win!";
        } else if (playerChoice == "data-choice = 1" && computerChoice == "data-choice = 0") {
            playerResult = "You Win!";
        } else if (playerChoice == "data-choice = 2" && computerChoice == "data-choice = 1") {
            playerResult = "You Win!";
        } else if (playerChoice == "data-choice = 2" && computerChoice == "data-choice = 0") {
            playerResult = "You loose";
        } else if (playerChoice == "data-choice = 0" && computerChoice == "data-choice = 1") {
            playerResult = "You loose!";
        } else if (playerChoice == "data-choice = 1" && computerChoice == "data-choice = 2") {
            playerResult = "You loose!";
        }

    }};