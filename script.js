const container = document.querySelector('#container');
const basket = document.querySelector('#basket');
const eggs = document.querySelectorAll('.egg');
const scoreBoard = document.querySelector('#score-board');
const leftUpButton = document.querySelector('.circle-button.left-up');
const leftButton = document.querySelector('.circle-button.left');
const rightUpButton = document.querySelector('.circle-button.right-up');
const rightButton = document.querySelector('.circle-button.right');

// initial eggs positions to change in generateEgg method

let player1Caught = 0;
let player2Caught = 0;
let player1Missed = 0;
let player2Missed = 0;
// let round = 1;
// let gameStatus = 'running';

// Make an Egg class. Create methods to manage eggs:

class Egg {
    constructor() {
      this.shelf = null;
    //   this.positionLeft = null;
    //   this.positionRight = null;
    //   this.positionBottom = null;
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
        if (i >= 20) return; //temporare!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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

        const eggRollInterval = setInterval(() => {
        // 1 represents the distance the egg should move on each roll
          this.rollEgg(1); 
        
        // repeatedly call the this.rollEgg(1) method every 100 milliseconds, 
        //causing the egg to roll along the shelf.
        // checks if the egg element is still connected to the document
          if (!egg.isConnected) { 
            clearInterval(eggRollInterval);
          }
        }, 1000);

        setTimeout(() => {
            i++; //temporare!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            if (i < 20) { //temporare!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                this.generateEgg();
              } 
        }, 5000);
      };
        //method to roll eggs with the property of the edge that will be changing from 0 to 9. 
        rollEgg(position) {
          const eggElements = document.getElementsByClassName('egg');

          for (let i = 0; i < eggElements.length; i++) {
            const eggElement = eggElements[i];
            const currentPosition = parseFloat(eggElement.style.left); //left!!!!!!!!!!!!!!!!!!!!!!!!

            if (currentPosition >= 0 && currentPosition <= 9) {
              const newPosition = currentPosition + position;

              if (newPosition > 9) {
                // Remove egg element temporarely once it falls off the shelf!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                let iterations = eggElement.getAttribute('data-iterations');
                // if (!iterations) {
                //   iterations = 0;
                // }
                // iterations++;
                // eggElement.setAttribute('data-iterations', iterations);
                // if (iterations >= 9) {
                  eggElement.remove();
                  continue;
              }
            }
            eggElement.style.left = newPosition + '%';
          }
        }
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


