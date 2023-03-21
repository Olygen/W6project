const container = document.querySelector('#container');
const basket = document.querySelector('#basket');
const eggs = document.querySelectorAll('.egg');
const scoreBoard = document.querySelector('#score-board');
const leftUpButton = document.querySelector('.circle-button.left-up');
const leftButton = document.querySelector('.circle-button.left');
const rightUpButton = document.querySelector('.circle-button.right-up');
const rightButton = document.querySelector('.circle-button.right');

// initial eggs positions to change in generateEgg method

let player1Score = 0;
let player2Score = 0;
let player1Caught = 0;
let player2Caught = 0;
// let round = 1;
// let gameStatus = 'running';

// Make an Egg class with properties of shelf and egg position. 
// Create methods and functions to manage eggs:

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
        if (i >= 20) return;

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

        setTimeout(() => {
            i++;
            if (i < 20) { 
                this.generateEgg();
              } 
        }, 5000);
    };
};
 // eggs generation:
let i = 0; // add loop counter variable declaration
const egg = new Egg();
egg.generateEgg(0);


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


