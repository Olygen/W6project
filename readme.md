EASTER IS COMING

✅ Requirements:
•	Must be a two player game (either against the computer or against another player)
•	A win state - a way for the player to win the game
•	A lose state - a way for the player to lose the game
•	A way to keep playing if the game is not over
•	Multiple rounds to play - a round must begin, end, and there must be a way to check if the game should continue or the overall game is won or lost

Not mandatory Requirements:
•	A way to reset the board and play again
•	CSS to give your game a personal and fun style
•	Responsive mobile design

✅ MAIN IDEA

Players try to catch in the basket as many eggs as possible. Eggs are produced by 4 hens sitting on 4 shelves (appears on the top of shelves). Shelves are inclined, eggs roll down along the shelves. As soon player misses egg, another player starts/continues. Game continues until one of the players reaches certain score.
We need to make eggs appear randomly from 4 different places and move smoothly until the end of the shelf hitting the basket which is managed by buttons or falling down.

✅ SKETCH 

Prepare images of hens, shelves, basket for eggs and henhouse background
HTML: 
•	Add container for henhouse. 
•	Add 4 buttons: 2 on the left of container, 2 on the right. 
•	Make a shelves class, place inside 4 divs with different ids for shelves
•	Div for basket, container for eggs.
•	Div for scoreboard (number of eggs caught and lost by players)
CSS: put a background of henhouse inside. Place shelves on both sides of the canvas inclined to the center. Place basket between shelves. Place scoreboard on the top of henhouse.
Script.js: 
•	Make a player (basket) object and 2 instances with properties of names, caught and lost eggs.
•	Make an Egg class: with properties of shelf and edge.
o	Values of edge properties will be changing from 0 to 4 according to their position on the shelf (the closer to the edge the higher value). As soon value achieves 4 the egg falls down
•	Create methods to manage eggs and playerBoxes: 
o	chooseShelf() – random from 0 to 4 using Math.random() method this.shelf = Math.floor(Math.random() * 4) + 1;
o	eggPostion() changing values and shifting eggs along the shelf
o	basketPosition() – with event listener for buttons to move Basket towards the shelves. The egg will only be caught if basket position is closest to the egg with the highest value of edge.
o	setInterval method – to recall eggs emersion until someone's score is at XXX caught of YYY lost eggs. Isolate what it is that you want to repeat.
•	Create Game object and methods to control the game: 
o	getMessage() to create window with asking messages and giving instuctions
o	start(), reStart(), run(), stop(), 
o	updateScore(), winState() and loseState() - methods in the game object that will run a check with win and lose conditions depending on caught and lost properties of players.
•	For mobile devices should be some modification method
