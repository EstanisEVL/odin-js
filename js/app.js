const btn = document.querySelectorAll("button");
const div = document.querySelector(".results");

let resCounter = {
  playerWins: 0,
  computerWins: 0,
  ties: 0
};

const getComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];

  let choice = Math.floor(Math.random() * choices.length + 1);

  switch(choice) {
    case 1:
      choice = choices[0];
      break;

    case 2:
      choice = choices[1];
      break;

    case 3:
      choice = choices[2];
      break;
  }
  return choice;
}

const displayWinner = (results) => {
  let resultMessage = `Player wins: ${results.playerWins} | Computer wins: ${results.computerWins} | Ties: ${results.ties}`;
  const resultP = document.createElement("p");

  if((resCounter.playerWins === 5 || resCounter.computerWins === 5)) {
    if(resCounter.playerWins + resCounter.computerWins > resCounter.ties) {
      resultP.innerText = resCounter.playerWins > resCounter.computerWins ? "Player wins!" : "Computer wins!";
      div.appendChild(resultP);
    } else {
      resultP.innerText = "Tied!";
      div.appendChild(resultP);
    }
    resCounter.playerWins = 0;
    resCounter.computerWins = 0;
    resCounter.ties = 0;
  } else {
    resultP.innerText = resultMessage;
    div.appendChild(resultP);
  }
}

const playRound = (selection) => {
  let playerSelection = "";

  if(Number(selection) === 1) {
    playerSelection = "Rock";
  } else if (Number(selection) === 2) {
    playerSelection = "Paper";
  } else {
    playerSelection = "Scissors"
  }

  const computerSelection = getComputerChoice();

  if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
    resCounter.computerWins += 1;
  } else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
    resCounter.ties += 1;
  } else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
    resCounter.playerWins += 1;
  }

  if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
    resCounter.computerWins += 1;
  } else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
    resCounter.ties += 1;
  } else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
    resCounter.playerWins += 1;
  }

  if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
    resCounter.computerWins += 1;
  } else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
    resCounter.ties += 1;
  } else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
    resCounter.playerWins += 1;
  }

  displayWinner(resCounter);
}

btn.forEach(button => {
  button.addEventListener("click", (e) => {
    playRound(e.target.id);
  });
})