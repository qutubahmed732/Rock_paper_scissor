const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const winn = document.querySelector(".win");
const losee = document.querySelector(".lose");
const tie = document.querySelector(".tie");

// Score Object
let score = {
  win: 0,
  lose: 0,
  tie: 0
}


// Main Function
function gamePlay(value) {
  let para = document.querySelector(".para");

  // Randomly generate computer move
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissor';
  }
  console.log(computerMove);

  // Upgrading Scores and innerText of variables.
  if (computerMove === value) {
    console.error("Match tie");
    score.tie += 1;
    para.innerText = "Match tie";
    tie.innerText = Number(score.tie);
  } else if (
    (value === "rock" && computerMove === "scissor") ||
    (value === "paper" && computerMove === "rock") ||
    (value === "scissor" && computerMove === "paper")
  ) {
    para.innerText = ""
    para.innerText = "player win"
    score.win += 1;
    winn.innerText = Number(score.win);
  } else {
    para.innerText = "computer win";
    score.lose += 1;
    losee.innerText = Number(score.lose);
  }

  // Updating text if someone wins
  const heading = document.querySelector("h2");
  if (score.win === 5) {
    heading.innerText = "Player Win";
    const rollBtn = document.querySelectorAll(".roll");
  } else if (score.lose === 5) {
    heading.innerText = "Computer Win"
  }
}


rockBtn.addEventListener("click", () => { gamePlay("rock") });
paperBtn.addEventListener("click", () => { gamePlay("paper") });
scissorBtn.addEventListener("click", () => { gamePlay("scissor") });