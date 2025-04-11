const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");

let score = {
   win: 0,
   lose: 0,
   tie: 0
}

function gamePlay(value){
   console.log(value);
}

rockBtn.addEventListener("click", gamePlay("Rock"))

// Rock button function
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

   // update result variable;
   if (computerMove === 'Rock') {
      result = 'Tie';
   } else if (computerMove === 'Paper') {
      result = 'You Lose';
   } else if (computerMove === 'Scissors') {
      result = 'You Win';
   }

   alert(`You picked rock. Computer picked ${computerMove}. ${result}`)
   console.log(result);

   // update scores variables
   if (result === "You Win") {
      score.win += 1;
      console.log("playerScore===>>>" + score.win);

   } else if (result === "You Lose") {
      score.lose += 1;;
      console.log("computerScore===>>>" + score.lose);
   } else {
      score.tie += 1;
   }

   localStorage.setItem("score", JSON.stringify(score));
}
// Paper button function
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

   // update result variable;
   if (computerMove === 'Rock') {
      result = 'You Win';
   } else if (computerMove === 'Paper') {
      result = 'Tie';
   } else if (computerMove === 'Scissors') {
      result = 'You Lose';
   }

   alert(`You picked Paper. Computer picked ${computerMove}. ${result}`)
   console.log(result);

   // update scores variables
   if (result === "You Win") {
      score.win += 1;
      console.log("playerScore===>>>" + score.win);

   } else if (result === "You Lose") {
      score.lose += 1;
      console.log("computerScore===>>>" + score.lose);
   } else {
      score.tie += 1;
   }

   localStorage.setItem("score", JSON.stringify(score));
}

// scissor button function
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

   // update result variable;
   if (computerMove === 'Rock') {
      result = 'You Lose';
   } else if (computerMove === 'Paper') {
      result = 'You Win';
   } else if (computerMove === 'Scissors') {
      result = 'Tie';
   }

   alert(`You picked Scissors. Computer picked ${computerMove}. ${result}`)
   console.log(result);

   // update scores variables
   if (result === "You Win") {
      score.win += 1;
      console.log("playerScore===>>>" + score.win);

   } else if (result === "You Lose") {
      score.lose += 1;
      console.log("computerScore===>>>" + score.lose);
   } else {
      score.tie += 1;
   }

   localStorage.setItem("score", JSON.stringify(score));
}

document.querySelector(".reset_score").addEventListener("click", () => {
   localStorage.removeItem("score");

   score = {
      win: 0,
      lose: 0,
      tie: 0
   };
})
