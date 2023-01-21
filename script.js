const score = 0;
const userSelection = '';
const computerSelection = '';

function updateScoreView(score) {
  const scoreCounter = document.getElementById('score-counter');
  scoreCounter.innerText = score;
}

// click image, set user selection
// random comupter selection, set computer selection
// pass both into function to compare, return score change
// update view

//image click listener, once clicked, set user selection

const clickUserSelection = (event) => {
  if (event.target.id === 'paperButton') {
    userSelection = 'paper';
  } else if (event.target.id === 'scissorsButton') {
    userSelection = 'scissors';
  } else if (event.target.id === 'rockButton') {
    userSelection = 'rock';
  }
  console.log(userSelection);
};

const paperButton = document.getElementById('paperButton');
paperButton.addEventListener('click', (event) => clickUserSelection(event));

const scissorsButton = document.getElementById('scissorsButton');
scissorsButton.addEventListener('click', (event) => clickUserSelection(event));

const rockButton = document.getElementById('rockButton');
rockButton.addEventListener('click', (event) => clickUserSelection(event));
