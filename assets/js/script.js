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
            const playerChoice = e.target.dataset.choice;

            runGame(playerChoice);
        });
}

/**
 * This function display different images from the playerChoice values.
 * @param {string} playerChoice Button clicked by player.
 */
function runGame(playerChoice) {
    if (playerChoice === "0") {
        divPlayerImage.style.background = "url(assets/images/paper.jpg)";
    } else if (playerChoice === "1") {
        divPlayerImage.style.background = "url(assets/images/scissors.jpg)";
    } else if (playerChoice === "2") {
        divPlayerImage.style.background = "url(assets/images/stone.jpg)";
    }

    const computerChoice = generateComputerChoice()
    compareChoice(computerChoice, playerChoice)
}
/**
 * borrowed this code from Love Math project and added more code to it.
 * This function add 1 point and keep track of old scores.
 * when the points reach 5 it alerts.
 */
function playerScore() {

    let playerResult = parseInt(document.getElementById("player-one").innerText);
    document.getElementById("player-one").innerText = ++playerResult;
    if (playerResult > 4) {
        alert("You Are The Winner!");
        reset()
    }
}
/**
 * borrowed this code from Love Math project and added more code to it.
 * This function add 1 point and keep track of old scores.
 * when the points reach 5 it alerts.
 */
function computerScore() {
    let computerResult = parseInt(document.getElementById("player-two").innerText);
    document.getElementById("player-two").innerText = ++computerResult;
    if (computerResult > 4) {
        alert("Computer Wins!");
        reset()
    }

}
/** This function generate a random number from 0-2.
 * An image will be displayed when a number is given.
 * @returns numbers
 */
function generateComputerChoice() {

    const ranNum = Math.floor(Math.random() * 3);
    if (ranNum == 0) {
        divComputerImage.style.background = "url(assets/images/paper.jpg)";
    } else if (ranNum === 1) {
        divComputerImage.style.background = "url(assets/images/scissors.jpg)";
    } else if (ranNum === 2) {
        divComputerImage.style.background = "url(assets/images/stone.jpg)";
    }

    divComputerImage.style.backgroundRepeat = "no-repeat";
    return ranNum;
}
/**
 * This function reset the images and displays the start images.
 * It reset the results to 0.
 */
function reset() {
    document.getElementById("player-two").innerText = "0";
    document.getElementById("player-one").innerText = "0";
    divPlayerImage.style.backgroundImage = "url(assets/images/computer-image.jpg)";
    divPlayerImage.style.backgroundSize = "contain";
    divPlayerImage.style.backgroundRepeat = "no-repeat";
    divComputerImage.style.backgroundImage = "url(assets/images/computer-image.jpg)";
    divComputerImage.style.backgroundSize = "contain";
    divComputerImage.style.backgroundRepeat = "no-repeat";
}
/**
 * This function compare if choices are true, and the winner gets 1 point by adding
 * either playerScore() or computerScore().
 * @param {number} computerChoice 
 * @param {number} decisionChoice 
 */
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
}