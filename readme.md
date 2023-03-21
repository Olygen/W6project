✅ ✅ EASTER IS COMING
✅ Requirements:
•	Must be a two player game (either against the computer or against another player)
•	A win state - a way for the player to win the game
•	A lose state - a way for the player to lose the game
•	A way to keep playing if the game is not over
•	Multiple rounds to play - a round must begin, end, and there must be a way to check if the game should continue or the overall game is won or lost
•	A way to reset the board and play again
•	CSS to give your game a personal and fun style
•	Responsive mobile design
✅ MAIN IDEA
Players try to catch in the basket as many eggs as possible. Eggs are produced by 4 hens sitting on 4 shelves (appears on the top of shelves). Shelves are inclined, eggs roll down along the shelves. As soon player misses egg, another player starts/continues. Game continues until one of the players reaches certain score.
We need to make eggs appear randomly from 4 different places and move smoothly until the end of the shelf hitting the basket which is managed by buttons or falling down.
✅ ✅ SKETCH 
✅ Prepare images of hens, shelves, basket for eggs and henhouse background
✅  HTML: 
•	Add container for henhouse. 
•	Add 4 buttons: 2 on the left of container, 2 on the right. 
•	Make a shelves class, place inside 4 divs with different ids for shelves
•	Div for basket, container for eggs.
•	Div for scoreboard (number of eggs caught and lost by players)
✅ CSS: put a background of henhouse inside. Place shelves on both sides of the canvas inclined to the center. Place basket between shelves. Place scoreboard on the top of henhouse.
✅✅  Script.js: 
✅ Create Game object with properties () and methods to control the game: 
•	addMessage() – method to create window giving instructions and asking to start
•	Create a variable to keep track of the number of eggs caught by players.
•	Create a variable to keep track of the number of eggs missed by players.
•	Create const with win condition
•	Create const with lose condition
•	Create a variable to keep track of the current round.
•	Create a variables to keep track of the game status for methods start(), reStart(), stop() and run()
•	Create a method to handle the end of a round, asks if the game should continue and updates the game status.
•	Create a method to reset the game.
✅ Make a player class and 2 instances with properties of names, caught and lost eggs.
•	getMessage() to create window asking names by turn and announces that player with 1st name starts the game;
•	updateScore(name, caught, missed) method to update players’ score and their caught/missed eggs
•	changePlayer() to switch players when egg falls and call updateScore
•	winState() and loseState() - methods that will check with win and lose conditions depending on caught and lost properties of players, creates window with the name of the player and “win” or ”lose” and asks to continue
✅ Make an Egg class with properties of shelf and egg position. Create methods and functions to manage eggs:
•	generateEgg() – method with the loop to create instances of the class with condition to recall eggs emersion check with win and lose conditions. Eggs are to appear on the top of the shelves and use method chooseShelf()
•	chooseShelf() – method to choose shelf with function to generate eggs randomly values from 0 to 4 using Math.random() method this.shelf = Math.floor(Math.random() * 4) + 1; – 
•	eggRolls() – method to move eggs them from the top of the shelves to the bottom and change values of created variables of caught and missed eggs. There should be property of the edge that will be changing according to their position on the shelf: the closer to the edge the higher value from 0 to 9. If value achieves 9 AND basket is close – variables of caught by player eggs: +1, egg disappears. Else variables of missed by player eggs +1, egg falls down (eggFalls() is recalled), other players continue to play.
•	eggFalls() – method to make egg fall from the shelf. Value changes to TRUE and used in changePlayer() method of the Game object
•	Add event listeners to the eggs to check its position
✅ Make a Basket object
•	Add event listener for buttons to move Basket towards the left, up-left, right and up-right shelves or event listener for mouse to drug and drop basket towards shelves.
•	basketPosition() – method that compares the egg with basket positions. If  basket position is close enough to the egg – it is caught, pass value to the variable of caught by player eggs, else – missed, pass value to the variable of missed by player eggs
•	For mobile devices should be some modification method
