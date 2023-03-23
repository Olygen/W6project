const container = document.querySelector('#container');
const basket = document.querySelector('#basket');
const eggs = document.querySelectorAll('.egg');
const scoreBoard = document.querySelector('#score-board');
const leftUpButton = document.querySelector('.circle-button.left-up');
const leftButton = document.querySelector('.circle-button.left');
const rightUpButton = document.querySelector('.circle-button.right-up');
const rightButton = document.querySelector('.circle-button.right');
const leftUpShelf = document.querySelector('#left-up-shelf');
const leftShelf = document.querySelector('#left-shelf');
const rightUpShelf = document.querySelector('#right-up-shelf');
const rightShelf = document.querySelector('#right-shelf');

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
      this.shelf = null;
    }

    // method to choose shelf randomly with values from 0 to 4 
    chooseShelf() { 
      this.shelf = Math.floor(Math.random() * 4) + 1;
  
      // Set the "id" attribute of the corresponding shelf div element
        let shelfElementId;
      switch (this.shelf) {
        case 1:
          shelfElementId = "left-up-shelf";
          break;
        case 2:
          shelfElementId = "left-shelf";
          break;
        case 3:
          shelfElementId = "right-up-shelf";
          break;
        case 4:
          shelfElementId = "right-shelf";
          break;
        }
        return shelfElementId;
    }

  // method with the loop to create instances of the class Egg
  // with condition to recall eggs emersion after check with win and lose conditions. 
  // initially let condition be < 20
  // Eggs are to appear on the top of the chosen by method chooseShelf() shelves 

    generateEgg() { 

      // create an egg element and append the egg element to the container
        let egg = document.createElement('div');
        egg.className = 'egg';
        container.appendChild(egg);

        // initial eggs positions to change in generateEgg method
        let PositionLeft = null;
        let PositionRight = null;
        let PositionBottom = null;

        let shelfElementId = this.chooseShelf();

        if (shelfElementId === "left-up-shelf") {
            PositionLeft = 0;
            PositionBottom = 78; 
            PositionRight = null;
        } else if (shelfElementId === "left-shelf") {
            PositionLeft = 0;
            PositionBottom = 43; 
            PositionRight = null;
        } else if (shelfElementId === "right-up-shelf") {
            PositionRight = 0;
            PositionBottom = 78; 
            PositionLeft = null;
        } else if (shelfElementId === "right-shelf") {
            PositionRight = 0;
            PositionBottom = 43; 
            PositionLeft = null;
        }

        egg.style.left = PositionLeft + '%';
        egg.style.right = PositionRight + '%';
        egg.style.bottom = PositionBottom + '%';


      };
        //method to roll eggs with the property of the edge that will be changing from 0 to 9. 
        // Here, we're using this.shelf to determine which shelf the egg is on, 
        // and then incrementing edge from 0 to 9 to simulate the egg rolling. 
        // Within each iteration of the loop, we need to update the positionLeft, 
        //positionRight and positionBottom properties to change the egg's position, 
        //and then call some method to update the egg's style on the page. 
        rollEgg() {
          let edge = 0;
          while (edge < 9) {
          if (this.shelf === "left-up-shelf" || this.shelf === "left-up-shelf") {
            if (this.shelf === "left-up-shelf") {

            } else {

            }

          }
          else if (this.shelf === "right-up-shelf" || this.shelf === "right-shelf") {
            if (this.shelf === "right-up-shelf") {
              
            } else {

            }
          }
          edge ++;
          }
        }
};
// number of eggs set to 20:
const maxEggs = 20;
let i = 0;
const egg = new Egg();

function generateEggWithDelay() {
  egg.generateEgg();
  i++;
  if (i < maxEggs) {
    setTimeout(generateEggWithDelay, 5000);
  }
}

window.alert("This is a henhouse. Catch the Eggs for coming Easter \n by pressing buttons or shifting basket");


const player1Name = prompt("Enter name for player 1:");
const player2Name = prompt("Enter name for player 2:");

const player1 = new Player(player1Name, 0, 0);
const player2 = new Player(player2Name, 0, 0);

const startGame = window.alert(`${player1Name} starts the game`);

window.alert(`You hit the alien ship! Its hull is now ${target.hull}.`);

generateEggWithDelay();

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


