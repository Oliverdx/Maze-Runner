# Maze Runner with Javascript
Logical test to run a bot in a matrix with two dimensions where the 0 is a blocked path and 1 is walkable.

## How to run the bot
* Create an matrix 2x2 with 0 and 1's and define a "treasure"
* Run the function with the initial parameters (column, row, treasure)

## How it work
The bot will verify is the path is clear first and walk to that point, the main sequence is { right, down, left, up },
where in definition is a complete circle, but when the bot find clear path to go,
jump the next command avoinding runnning in circles, if find a wall or is a blocked path go through the next possible command.

## Knowledge aqquired
How to run a linear bot in Javascript using a recursive function

## Plans to the future
Start to use artificial intelligence concept to make the bot learn how to go to the treasure in the shortest path
