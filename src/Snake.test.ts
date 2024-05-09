import  Snake  from "./Snake";
import Point from "./Point";
import  WorldModel  from "./worldmodel";
import  SnakeController  from "./SnakeController";
//import { AvoidWallsPlayer } from "./avoidWallsPlayer";

describe("Snake Tests", () => {
  let snake: Snake;
  const startingPoint= new Point (0,0)
  beforeEach(() => {
    snake = new Snake(startingPoint,1);
  });

  it("starts with the correct position of 0", () => {
    expect(snake.position.x).toBe(0);
    expect(snake.position.y).toBe(0);
  });
  it("The snake moves a random amount.", () => {
    const rannum = Math.floor(Math.random() * 10);
    snake.move(rannum);
    expect(snake.position.x).toBe(0);
    expect(snake.position.y).toBe(rannum);
  });
  it("The snake turns right and moves.", () => {
    snake.turnRight();
    snake.move(1);
    expect(snake.position.x).toBe(1);
    expect(snake.position.y).toBe(0);
  });
});