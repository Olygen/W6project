const container = document.querySelector('#container');
const basket = document.querySelector('#basket');
const scoreBoard = document.querySelector('#score-board');

let player1Caught = 0;
let player2Caught = 0;
let player1Missed = 0;
let player2Missed = 0;
let round = 1;
let gameStatus = 'running';

// Create Game class to manage rounds and switch players

class Game {
  constructor(player1Name, player2Name) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.round = 1; // initialize round to 1
  }
  switchPlayer() {
    const { player1Name, player2Name, round } = this;
    if (round % 2 === 1) {
      window.alert(`${player2Name} continues the game`);
    } else {
      window.alert(`${player1Name} continues the game`);
    }
    this.round++; // increment round by 1
    generateEggWithDelay();
  }
}

// Create Players class. Create methods to manage score and switch players:

class Player {
  constructor(name, caught, missed) {
    this.name = name;
    this.caught = caught;
    this.missed = missed;
  }
}


// Create an Egg class. Create methods to manage eggs:

class Egg {
  constructor() {
    this.element = null;
  }

  generateEgg() {
    const egg = document.createElement('div');
    egg.className = 'egg';
    container.appendChild(egg);
    this.element = egg;
    this.element.style.left = `${Math.floor(Math.random() * (container.offsetWidth - this.element.offsetWidth))}px`;
  }
};

// number of eggs set to 20:
const maxEggs = 20;


// eggs appear and fall immediately

function generateEggWithDelay() {
  for (let i = 0; i < maxEggs; i++) {
    setTimeout(() => {
      const egg = new Egg();
      egg.generateEgg();
      eggFall(egg);
    }, i * 1000);
  }
}

function startEggFallAnimation() {
  const eggs = document.querySelectorAll('.egg');
  eggs.forEach(egg => eggFall(egg));
}


function eggFall(egg) {
  egg.element.style.position = 'absolute';
  const initialPosition = {
    left: egg.element.offsetLeft,
    top: egg.element.offsetTop
  };
  egg.element.style.left = `${initialPosition.left}px`;
  egg.element.style.top = `${initialPosition.top}px`;

  let pos = initialPosition.top;
  let id = setInterval(frame, 5);
  function frame() {
    if (pos >= container.offsetHeight - 30) {
      clearInterval(id);
    } else {
      pos++;
      egg.element.style.top = `${pos}px`;
    }
  }
}

window.alert("You are in the henhouse. Catch the Eggs for coming Easter \n by pressing arrows");

const player1Name = prompt("Enter name for player 1:");
const player2Name = prompt("Enter name for player 2:");

const player1 = new Player(player1Name, 0, 0);
const player2 = new Player(player2Name, 0, 0);

const startGame = window.alert(`${player1Name} starts the game`);

generateEggWithDelay();

// const game = new Game(player1Name, player2Name);
// game.switchPlayer();

document.addEventListener("keydown", function(event) {
  const arrowKeys = ["ArrowLeft", "ArrowRight"];
  if (arrowKeys.includes(event.key)) {
    const containerRect = container.getBoundingClientRect();
    const basketRect = basket.getBoundingClientRect();
    const basketLeft = basketRect.left - containerRect.left;
    const basketWidth = basketRect.width;
    const containerWidth = containerRect.width;
    const movementDistance = 20;

    if (event.key === "ArrowLeft" && basketLeft > 0) {
      basket.style.left = `${basketLeft - movementDistance}px`;
    } else if (event.key === "ArrowRight" && basketLeft + basketWidth < containerWidth) {
      basket.style.left = `${basketLeft + movementDistance}px`;
    }

    const eggs = document.querySelectorAll(".egg");
    eggs.forEach(egg => {
      const eggRect = egg.getBoundingClientRect();
      const eggLeft = eggRect.left - containerRect.left;
      const eggTop = eggRect.top - containerRect.top;
      const eggWidth = eggRect.width;
      const eggHeight = eggRect.height;
      const basketTop = basketRect.top - containerRect.top;

      if (eggTop + eggHeight > basketTop && eggLeft >= basketLeft && eggLeft + eggWidth <= basketLeft + basketWidth) {
        egg.remove();
        if (round % 2 === 1) {
          player1.caught++;
        } else {
          player2.caught++;
        }
        scoreBoard.innerText = `${player1.name}: ${player1.caught} caught, ${player1.missed} missed\n${player2.name}: ${player2.caught} caught, ${player2.missed} missed`;
      } else if (eggTop + eggHeight >= containerRect.height) {
        egg.remove();
        if (round % 2 === 1) {
          player1.missed++;
        } else {
          player2.missed++;
        }
        scoreBoard.innerText = `${player1.name}: ${player1.caught} caught, ${player1.missed} missed\n${player2.name}: ${player2.caught} caught, ${player2.missed} missed`;
      }
    });
  }
});
