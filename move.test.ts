import { Snake } from "./snake";
import { SnakeController } from "./snake";
import { AvoidWallsPlayer } from "./avoidWallsPlayer";

// Instantiate SnakeController and Snake
const snakeController = new SnakeController(new WorldModel("green", 10, 10));
const snake = snakeController.snake;

// Instantiate AvoidWallsPlayer
const avoidWallsPlayer = new AvoidWallsPlayer(snakeController);

// Log initial snake position and direction
console.log("Initial Snake Position:", snake.position);
console.log("Initial Snake Direction:", snake.getDirection());

// Make the player turn
avoidWallsPlayer.makeTurn();

// Log updated snake position and direction
console.log("Updated Snake Position:", snake.position);
console.log("Updated Snake Direction:", snake.getDirection());
