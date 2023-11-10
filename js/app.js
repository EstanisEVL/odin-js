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
  console.log(choice);
  return choice;
}

const playRound = (playerSelection, computerSelection) => {
  if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
    const result = `You Lose! ${computerSelection} beats ${playerSelection}`
    return result;
  } else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
    const result = `Tied! ${computerSelection} ties with ${playerSelection}`;
    return result;
  } else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
    const result = `You Win! ${playerSelection} beats ${computerSelection}`;
    return result;
  }

  if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
    const result = `You Lose! ${computerSelection} beats ${playerSelection}`
    return result;
  } else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
    const result = `Tied! ${computerSelection} ties with ${playerSelection}`;
    return result;
  } else if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
    const result = `You Win! ${playerSelection} beats ${computerSelection}`;
    return result;
  }

  if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
    const result = `You Lose! ${computerSelection} beats ${playerSelection}`
    return result;
  } else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
    const result = `Tied! ${computerSelection} ties with ${playerSelection}`;
    return result;
  } else if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
    const result = `You Win! ${playerSelection} beats ${computerSelection}`;
    return result;
  }
}

const game = (rounds) => {
  let resCounter = {
    playerWins: 0,
    computerWins: 0,
    ties: 0
  };

  for(let i = 1; i <= rounds; i++) {
    
    const playerSelection = prompt("Choose: Rock, Paper or Scissors.");
    const computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);

    if(result === `You Win! ${playerSelection} beats ${computerSelection}`) {
      resCounter.playerWins += 1;
    } else if(result === `You Lose! ${computerSelection} beats ${playerSelection}`) {
      resCounter.computerWins += 1;
    } else {
      resCounter.ties += 1;
    }
  }

  const displayWinner = (results) => {
    if(results.playerWins === results.computerWins || results.ties === rounds) {
      return "Tie!";
    } else {
      return results.playerWins > results.computerWins ? "Player wins!" : "Computer wins!";
    }
  }

  console.log(resCounter);
  console.log(displayWinner(resCounter));
}

game(5);