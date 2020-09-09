// assign variables
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("sicssors");

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

console.log(getComputerChoice());

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rock + scissors":
        case "paper + rock":
        case "scissor + paper":
            console.log("User Wins!");
            break;
        case "rockpaper" :
        case "paperscissors":
        case "scissorsrock":
            console.log("USER Loses")
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw();
            break;
    }
        
}







// function main() {
//     rock_div.addEventListener('click' function() {
//         Game("rock");
//     })

//     paper_div.addEventListener('click' function() {
//         Game("paper");
//     })

//     scissors_div.addEventListener('click' function() {
//         Game("siccsors");
//     })

// }

// main();