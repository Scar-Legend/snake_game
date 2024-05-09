import LRKeyInputHandler from "./LRKeyInputHandler"
import Player from "./Player";
import  SnakeController  from "./SnakeController";

class HumanPlayer extends Player {
    protected in: LRKeyInputHandler
    constructor(input: LRKeyInputHandler, snakeC: SnakeController) {
        super(snakeC)
        this.in = input 
    }
    makeTurn()  {
        if (
            this.in.madeLeftMove()
        )
        {
            this.sc.turnSnakeLeft()
            this.in.resetLeftMove()
        }
        else if (
            this.in.madeRightMove()
        )
        {
            this.sc.turnSnakeRight()
            this.in.resetRightMove()
        }

        
    }
}
export default HumanPlayer;