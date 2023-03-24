const container = document.querySelector('#container');
const basket = document.querySelector('#basket');
const scoreBoard = document.querySelector('#score-board');

let player1Caught = 0;
let player2Caught = 0;
let player1Missed = 0;
let player2Missed = 0;
// let round = 1;
// let gameStatus = 'running';

// Create Game class to manage rounds and switch players

class Game {
  constructor(player1Name, player2Name) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.round = 1; 

  }
  switchPlayer() {

    if (this.round % 2 === 1) {
      window.alert(`${player1Name}'s turn to catch eggs`);
    } else {
      window.alert(`${player2Name}'s turn to catch eggs`);
    }
    this.round++; 
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
      // if (i === maxEggs - 1) {
      //   // Call the callback function when all the eggs have fallen
      //   callback();
      // }
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

const game = new Game(player1Name, player2Name);

//event listener that listens for keydown events on the document object. 
//When a keydown event is triggered, the function defined in the second 
//argument of the addEventListener method is executed. 

document.addEventListener("keydown", function(event) {
  const arrowKeys = ["ArrowLeft", "ArrowRight"];
  // checks if the pressed key is an arrow key
  if (arrowKeys.includes(event.key)) {
    // finding out sizes of basket and container
    const containerRect = container.getBoundingClientRect();
    const basketRect = basket.getBoundingClientRect(); // method returns an object with properties representing the size and position of the element
    const basketLeft = basketRect.left - containerRect.left;
    const basketWidth = basketRect.width;
    const containerWidth = containerRect.width;
    const movementDistance = 20; //distance the basket will move with each keypress

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
        if (game.round % 2 === 1) {
          player2.caught++;
        } else {
          player1.caught++;
        }
        scoreBoard.innerText = `${player1.name}: ${player1.caught} caught, ${player1.missed} missed\n${player2.name}: ${player2.caught} caught, ${player2.missed} missed`;
      } else if (eggTop + eggHeight >= containerRect.height) {
        egg.remove();
        if (game.round % 2 === 1) {
          player2.missed++;
        } else {
          player1.missed++;
        }
        scoreBoard.innerText = `${player1.name}: ${player1.caught} caught, ${player1.missed} missed\n${player2.name}: ${player2.caught} caught, ${player2.missed} missed`;
      }
    });

  }
}); 


// function playGame() {
//   game.switchPlayer();
//   generateEggWithDelay(() => {
//     // Switch to the second player after all the eggs have fallen
//     game.switchPlayer();
//   });
// }

// playGame();

game.switchPlayer();
