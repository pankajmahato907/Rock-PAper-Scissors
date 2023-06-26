let winMsg = 'Victory';
let loseMsg = 'Crushing Defeat';
let tieMsg = 'tie';
let moveList = ['Rock','Paper','Scissors'];
let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelectorAll('.move-display h2');
let buttons = document.querySelectorAll('button');

/**
 * Computes result of the game. returns victory message if move 1 wins.
 * @param  {Number}   move1  move 1
 * @param  {Number}   move2  move 2
 * @return {String}   result result of the game
 */

function calcResult(move1, move2) {
  if (move1 == move2)
  {
    statusDisplay.textContent = 'Tie!'
    moveDisplays[0].textContent = 'You played ' + moveList[move1];
    moveDisplays[1].textContent = 'Computer played ' + moveList[move2];
  }  
  else if ( move1 == 2 && move2 == 1 )
  {
    statusDisplay.textContent = winMsg;
    moveDisplays[0].textContent = 'You played ' + moveList[2];
    moveDisplays[1].textContent = 'Computer played ' + moveList[1];

  }
  else if ( move1 == 1 && move2 == 0 )
  {
    statusDisplay.textContent = winMsg;
    moveDisplays[0].textContent = 'You played ' + moveList[1];
    moveDisplays[1].textContent = 'Computer played ' + moveList[0];

  }
  else if ( move1 == 0 && move2 == 2  )
  {
    statusDisplay.textContent = winMsg;
    moveDisplays[0].textContent = 'You played ' + moveList[0];
    moveDisplays[1].textContent = 'Computer played ' + moveList[2];

  }
  else{
    statusDisplay.textContent = loseMsg;
    moveDisplays[0].textContent = 'You played ' + moveList[move1];
    moveDisplays[1].textContent = 'Computer played ' + moveList[move2];
  }
  buttons[0].style = 'display:none'
  buttons[2].style = 'display:none'
  buttons[1].style = 'display:none'
  buttons[3].textContent = 'Play Again!'
  buttons[3].style = 'display:block'
  buttons[3].addEventListener('click',startGame)
  moveDisplays[0].style = 'display:block'
  moveDisplays[1].style = 'display:block'


}

/**
 * @return {Number}   random number between 0 and 2
 */

function randomMove() {
  return Math.floor(Math.random() * 3);
}

/**
 * Displays start state of game
 */

function startGame() {
  statusDisplay.textContent = 'Choose!';
  for (let i = 0;i<buttons.length;i++){
    buttons[i].textContent = moveList[i];
    buttons[i].style.display = 'inline-block';
    buttons[i].addEventListener("click",endGame);
  
  }

  buttons[3].style = 'display:none'
  moveDisplays[0].style = 'display:none'
  moveDisplays[1].style = 'display:none'
  

}

/**
 * Displays end state of game
 * @param {Event} event event containing information of users input.
 */

function endGame(event) {
  let userMove =moveList.indexOf(event.target.textContent);
  let compMove = randomMove();
  console.log(compMove);
  calcResult(userMove,compMove);
}

startGame();
