const container = document.querySelector('#container');
const basket = document.querySelector('#basket');
const scoreBoard = document.querySelector('#score-board');
// const leftUpButton = document.querySelector('.circle-button.left-up');
// const leftButton = document.querySelector('.circle-button.left');
// const rightUpButton = document.querySelector('.circle-button.right-up');
// const rightButton = document.querySelector('.circle-button.right');

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
      // this.shelf = null;
    }

    // method to choose shelf randomly with values from 0 to 4. 
    // Set the "id" attribute of the corresponding shelf div element
    // chooseShelf() { 
    //   this.shelf = Math.floor(Math.random() * 4) + 1;

    //     let shelfElementId;
    //   switch (this.shelf) {
    //     case 1:
    //       shelfElementId = "left-up-shelf";
    //       break;
    //     case 2:
    //       shelfElementId = "left-shelf";
    //       break;
    //     case 3:
    //       shelfElementId = "right-up-shelf";
    //       break;
    //     case 4:
    //       shelfElementId = "right-shelf";
    //       break;
    //     }
    //     return shelfElementId;
    // }

  // method with the loop to create instances of the class Egg
  // with condition to recall eggs emersion after check with win and lose conditions. 
  // initially let condition be < 20
  // Eggs are to appear on the top of the chosen by method chooseShelf() shelves 

  generateEgg() { 

    let egg = document.createElement('div');
    egg.className = 'egg';
    container.appendChild(egg);
    egg.id = `egg-${i}`; // add a unique ID to the egg element
    // eggFall(egg.id); 

        // initial eggs positions to change in generateEgg method
        // let PositionLeft = null;
        // let PositionRight = null;
        // let PositionBottom = null;

        // let shelfElementId = this.chooseShelf();

        // if (shelfElementId === "left-up-shelf") {
        //     PositionLeft = 0;
        //     PositionBottom = 78; 
        //     PositionRight = null;
        // } else if (shelfElementId === "left-shelf") {
        //     PositionLeft = 0;
        //     PositionBottom = 43; 
        //     PositionRight = null;
        // } else if (shelfElementId === "right-up-shelf") {
        //     PositionRight = 0;
        //     PositionBottom = 78; 
        //     PositionLeft = null;
        // } else if (shelfElementId === "right-shelf") {
        //     PositionRight = 0;
        //     PositionBottom = 43; 
        //     PositionLeft = null;
        // }

        // egg.style.left = PositionLeft + '%';
        // egg.style.right = PositionRight + '%';
        // egg.style.bottom = PositionBottom + '%';

        egg.id = `egg-${i}`; // add a unique ID to the egg element
        // i++; 
      
        eggFall(egg.id); 

      };

};
// number of eggs set to 20:
const maxEggs = 20;
let i = 0;
const egg = new Egg();

function generateEggWithDelay() {
  egg.generateEgg();
  //make eggs fall
  i++;
  if (i < maxEggs) {
    setTimeout(generateEggWithDelay, 500);
  }
}
  
window.alert("You are in the henhouse. Catch the Eggs for coming Easter \n by pressing arrows");


const player1Name = prompt("Enter name for player 1:");
const player2Name = prompt("Enter name for player 2:");

const player1 = new Player(player1Name, 0, 0);
const player2 = new Player(player2Name, 0, 0);

const startGame = window.alert(`${player1Name} starts the game`);

generateEggWithDelay();

// get all the egg elements and their initial positions


const eggIds = [];

for (let i = 0; i < maxEggs; i++) {
  egg.id = `egg-${i}`;
  eggIds.push(egg.id); // add the egg ID to the array
}

function eggFall(eggId) {
  const egg = document.getElementById(eggId); // select the egg element by ID
  let pos = 0;
  let id = null;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (egg.offsetTop >= egg.parentNode.offsetHeight - 30) {
      clearInterval(id);
    } else {
      pos++;
      egg.style.top = egg.offsetTop + pos + "px"; 
    }
  }
}

// eggIds.forEach((eggId) => {
//   eggFall(eggId);
// });

// updateScore(player, caught, missed) {
//   // TODO: update player's score and caught/missed eggs
// }

// leftButton.addEventListener('click', () => {
//   // TODO: move basket left
// });

// leftUpButton.addEventListener('click', () => {
//     // TODO: move basket left-up
//   });

// rightUpButton.addEventListener('click', () => {
//   // TODO: move basket right-up
// });

// rightButton.addEventListener('click', () => {
//   // TODO: move basket right
// });

// eggs.forEach((egg) => {
//   egg.addEventListener('transitionend', () => {
//     // TODO: check if egg hit the basket or fell off the shelves
//   });
// });

function eggFall(eggId) {
    const egg = document.getElementById(eggId);
    const containerHeight = container.offsetHeight;
    const eggHeight = egg.offsetHeight;
    let topPosition = parseInt(egg.style.top);
    let fallSpeed = 10;
  
    const fall = setInterval(function() {
      topPosition += fallSpeed;
      egg.style.top = topPosition + "px";
      
      if (topPosition + eggHeight > containerHeight) {
        clearInterval(fall);
        egg.remove();
      }
    }, 50);
  }
// function eggFall(eggId) {
//   const egg = document.getElementById(eggId); // select the egg element by ID
//   let pos = 0;
//   let id = null;
//   clearInterval(id);
//   id = setInterval(frame, 5);
//   function frame() {
//     if (egg.offsetTop >= egg.parentNode.offsetHeight - 30) {
//       clearInterval(id);
//     } else {
//       pos++;
//       egg.style.top = egg.offsetTop + pos + "px"; 
//     }
//   }
// }
  function eggFall(eggId) {
    const egg = document.getElementById(eggId);
    let topPos = parseInt(egg.style.top);
    const eggFallSpeed = 5; // adjust the speed of the fall by changing this value
    setInterval(() => {
      topPos += eggFallSpeed;
      egg.style.top = `${topPos}px`;
    }, 50);
  }

  // function eggFall(eggId) {
//   const egg = document.getElementById(eggId);
//   let pos = 1;
//   let id = setInterval(frame, 5);

//   function frame() {
//     if (egg.offsetTop >= egg.parentNode.offsetHeight - egg.offsetHeight) {
//       clearInterval(id);
//     } else {
//       pos += 0.1;
//       egg.style.top = egg.offsetTop + pos + "px"; 
//     }
//   }
// }

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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
      // this.shelf = null;
    }

      generateEgg() { 
        let egg = document.createElement('div');
        egg.className = 'egg';
        container.appendChild(egg);
        egg.id = `egg-${i}`;
        egg.style.left = `${Math.floor(Math.random() * (container.offsetWidth - egg.offsetWidth))}px`;
      };

};

// number of eggs set to 20:
const maxEggs = 20;
let i = 0;
const egg = new Egg();

// function generateEggWithDelay() {
//   egg.generateEgg();
//   i++;
//   if (i < maxEggs) {
//     setTimeout(generateEggWithDelay, 500);
//   } else {
//     eggIds.forEach((eggId) => {
//       setTimeout(() => eggFall(eggId), 1000);
//     });
//   }
// }
  
// function generateEggWithDelay() {
//   egg.generateEgg();
//   const eggId = `egg-${i}`;
//   const eggElement = document.getElementById(eggId);
//   const eggPosition = {
//     left: parseInt(eggElement.style.left),
//     top: parseInt(eggElement.style.top)
//   };
//   i++;
//   if (i < maxEggs) {
//     setTimeout(generateEggWithDelay, 500);
//   } else {
//     eggIds.forEach((eggId) => {
//       setTimeout(() => eggFall(eggId, eggPosition), 1000);
//     });
//   }
// }

function generateEggWithDelay() {
  for (let i = 0; i < maxEggs; i++) {
    const eggId = `egg-${i}`;
    const egg = new Egg();
    egg.id = eggId;
    egg.generateEgg();

    const initialPosition = {
      left: egg.offsetLeft,
      top: egg.offsetTop
    };

    eggIds.push(eggId);

    setTimeout(() => eggFall(eggId, initialPosition), 1000 + i * 1000);
  }
}

const eggIds = [];

for (let i = 0; i < maxEggs; i++) {
  egg.id = `egg-${i}`;
  eggIds.push(egg.id); // add the egg ID to the array
}

function eggFall(eggId, initialPosition) {
  const egg = document.getElementById(eggId);
  egg.style.position = 'absolute';
  egg.style.left = `${initialPosition.left}px`; 
  egg.style.top = `${initialPosition.top}px`; 

  let pos = initialPosition.top;
  let id = setInterval(frame, 5);
  function frame() {
    if (pos >= container.offsetHeight - 30) {
      clearInterval(id);
    } else {
      pos++;
      egg.style.top = `${pos}px`;
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

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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

function generateEggWithDelay() {
  for (let i = 0; i < maxEggs; i++) {
    const egg = new Egg();
    egg.generateEgg();

    setTimeout(() => eggFall(egg), 1000 + i * 1000);
  }
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

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// eggs appear with delay and don't fall
// function generateEggWithDelay() {
//   let eggCount = 0;

//   const generateEggInterval = setInterval(() => {
//     const egg = new Egg();
//     egg.generateEgg();

//     eggCount++;
//     if (eggCount >= maxEggs) {
//       clearInterval(generateEggInterval);
//       setTimeout(startEggFallAnimation, 1000);
//     }
//   }, 1000);
// }


!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
WORKING SCRIPT WITH 1 PLAYER!!!!!!!!!!!
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