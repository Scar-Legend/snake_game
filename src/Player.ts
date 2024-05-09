import  SnakeController  from "./SnakeController";
abstract class Player {
  protected sc: SnakeController;
  constructor(SnakeController: SnakeController) {
    this.sc = SnakeController;
  }
  abstract makeTurn(): void;
}
export default Player;
