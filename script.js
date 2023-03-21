const container = document.querySelector('#container');
const basket = document.querySelector('#basket');
const eggs = document.querySelectorAll('.egg');
const scoreBoard = document.querySelector('#score-board');
const leftUpButton = document.querySelector('#circle-button left-up');
const leftButton = document.querySelector('#circle-button left');
const rightUpButton = document.querySelector('#circle-button right-up');
const rightButton = document.querySelector('#circle-button right');

let player1Score = 0;
let player2Score = 0;
let player1Caught = 0;
let player2Caught = 0;
let round = 1;
let gameStatus = 'running';

function generateEgg() {
  // TODO: generate egg randomly and move it down
}

function updateScore(player, caught, missed) {
  // TODO: update player's score and caught/missed eggs
}

function handleEndRound() {
  // TODO: handle end of round, update game status, and check if the game should continue
}

function resetGame() {
  // TODO: reset game state, score, and UI
}

leftUpButton.addEventListener('click', () => {
  // TODO: move basket left-up
});

leftButton.addEventListener('click', () => {
  // TODO: move basket left
});

rightUpButton.addEventListener('click', () => {
  // TODO: move basket right-up
});

rightButton.addEventListener('click', () => {
  // TODO: move basket right
});

eggs.forEach((egg) => {
  egg.addEventListener('transitionend', () => {
    // TODO: check if egg hit the basket or fell off the shelves
  });
});

resetButton.addEventListener('click', resetGame);
