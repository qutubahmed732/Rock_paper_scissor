let computerScore = 0;
let playerScore = 0;


function computerMoveRock() {
   const randomNumber = Math.random();
   let computerMove = '';
   if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'Rock';
   } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'Paper';
   } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'Scissors';
   }


   let result = '';

   if (computerMove === 'Rock') {
      result = 'Tie';
   } else if (computerMove === 'Paper') {
      result = 'You Lose';
   } else if (computerMove === 'Scissors') {
      result = 'You Win';
   }

   alert(`You picked rock. Computer picked ${computerMove}. ${result}`)
   console.log(result);

   if (result === "You Win") {
      playerScore += 1;
      console.log("playerScore===>>>" + playerScore);

   } else if (result === "You Lose") {
      computerScore += 1;
      console.log("computerScore===>>>" + computerScore);
   }

   if (computerScore === 5) {
      alert("Computer Win and You Lose");
      window.location.reload();

   } else if (playerScore === 5) {
      alert("Computer Lose and You Win");
      window.location.reload();

   }
}

function computerMovePaper() {
   const randomNumber = Math.random();
   let computerMove = '';
   if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'Rock';
   } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'Paper';
   } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'Scissors';
   }


   let result = '';

   if (computerMove === 'Rock') {
      result = 'You Win';
   } else if (computerMove === 'Paper') {
      result = 'Tie';
   } else if (computerMove === 'Scissors') {
      result = 'You Lose';
   }

   alert(`You picked Paper. Computer picked ${computerMove}. ${result}`)
   console.log(result);

   if (result === "You Win") {
      playerScore += 1;
      console.log("playerScore===>>>" + playerScore);

   } else if (result === "You Lose") {
      computerScore += 1;
      console.log("computerScore===>>>" + computerScore);
   }

   if (computerScore === 5) {
      alert("Computer Win and You Lose");
      window.location.reload();

   } else if (playerScore === 5) {
      alert("Computer Lose and You Win");
      window.location.reload();

   }
}

function computerMoveScissors() {
   const randomNumber = Math.random();
   let computerMove = '';
   if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'Rock';
   } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'Paper';
   } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'Scissors';
   }

   let result = '';

   if (computerMove === 'Rock') {
      result = 'You Lose';
   } else if (computerMove === 'Paper') {
      result = 'You Win';
   } else if (computerMove === 'Scissors') {
      result = 'Tie';
   }

   alert(`You picked Scissors. Computer picked ${computerMove}. ${result}`)
   console.log(result);

   if (result === "You Win") {
      playerScore += 1;
      console.log("playerScore===>>>" + playerScore);

   } else if (result === "You Lose") {
      computerScore += 1;
      console.log("computerScore===>>>" + computerScore);
   }

   if (computerScore === 5) {
      alert("Computer Win and You Lose");
      window.location.reload();

   } else if (playerScore === 5) {
      alert("Computer Lose and You Win");
      window.location.reload();

   }
}