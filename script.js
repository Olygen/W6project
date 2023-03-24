const container = document.querySelector('#container');
const basket = document.querySelector('#basket');
const scoreBoard = document.querySelector('#score-board');

let player1Caught = 0;
let player2Caught = 0;
let player1Missed = 0;
let player2Missed = 0;
let round = 1;
let gameStatus = 'running';

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
