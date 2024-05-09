import Player from "./Player";
import  SnakeController  from "./SnakeController";
import Snake from "./Snake";

class AvoidWallsPlayer extends Player {
  constructor(snakeController: SnakeController) {
    super(snakeController);
  }
  makeTurn(): void {
    if (this.sc.snakeDirection === -2 &&
       this.sc.snakePosition.x <= this.sc.worldWidth / 2 && 
       this.sc.snakePosition.y < this.sc.worldHeight-1)
        {
      this.sc.turnSnakeLeft();
    }
    else if (
      this.sc.snakeDirection === -2 &&
      this.sc.snakePosition.x <= this.sc.worldWidth &&
      this.sc.snakePosition.y === this.sc.worldHeight-1
    ) {
      this.sc.turnSnakeRight()
    }
    else if (
      this.sc.snakeDirection === 2 &&
      this.sc.snakePosition.x <= this.sc.worldWidth &&
      this.sc.snakePosition.y === this.sc.worldHeight-1
    ) {
      this.sc.turnSnakeRight()
    }    
    else if (
      this.sc.snakeDirection === 2 &&
      this.sc.snakePosition.y === this.sc.worldHeight-1
    ) {
      this.sc.turnSnakeLeft()
    }
    else if (
      this.sc.snakeDirection === 1 &&
      this.sc.snakePosition.x === this.sc.worldWidth - 1 &&
      this.sc.snakePosition.y === this.sc.worldHeight / 2
    ) {
      this.sc.turnSnakeRight()
    }
    else if (
      this.sc.snakeDirection === 1 &&
      this.sc.snakePosition.x === this.sc.worldWidth-1
    ) {
      this.sc.turnSnakeLeft()
    }
    else if (
      this.sc.snakeDirection === -1 &&
      this.sc.snakePosition.x === this.sc.worldWidth - 1 &&
      this.sc.snakePosition.y === this.sc.worldHeight / 2
    ) {
      this.sc.turnSnakeRight()
    }
    else if (
      this.sc.snakeDirection === -1 &&
      this.sc.snakePosition.x === this.sc.worldWidth-1
    ) {
      this.sc.turnSnakeLeft()
    }
  }
}
export default AvoidWallsPlayer ;
