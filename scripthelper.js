class Egg {
    generateEgg() {
      // create an egg element and append the egg element to the container
      let egg = document.createElement("div");
      egg.className = "egg";
      container.appendChild(egg);
  
      let PositionLeft = null;
      let PositionRight = null;
      let PositionBottom = null;
  
      // here is the peace of code to generate 4 different positions
  
      egg.style.left = PositionLeft + "%";
      egg.style.right = PositionRight + "%";
      egg.style.bottom = PositionBottom + "%";
    }
  }
  
  // eggs generation:
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
  
  generateEggWithDelay();