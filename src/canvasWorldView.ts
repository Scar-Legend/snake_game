import { IWorldView } from "./iworldview";
import  WorldModel  from "./worldmodel";
import Snake from "./Snake"

class CanvasWorldView implements IWorldView{
    private scalingFactor: number;
    private worldCanvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(scalingFactor: number) {
        this.scalingFactor = scalingFactor
        this.worldCanvas = document.createElement("canvas");
        this.context = this.worldCanvas.getContext("2d")!;
        document.body.appendChild(this.worldCanvas);
    }

    display(world: WorldModel): void {
        this.worldCanvas.width = world.Width * this.scalingFactor;
        this.worldCanvas.height = world.Height * this.scalingFactor;
        this.context.fillStyle= "green"
        world.snake.forEach((snake) => { 
        this.context.fillRect(snake.position.x*this.scalingFactor,snake.position.y*this.scalingFactor,this.scalingFactor,this.scalingFactor)
    });
        //this.context.clearRect(0, 0, this.worldCanvas.width, this.worldCanvas.height);
        world.snake.forEach((snake) => {
            snake.getAllParts().forEach((part) => {
                this.context.fillStyle = "green";
                this.context.fillRect(part.x * this.scalingFactor, part.y * this.scalingFactor, this.scalingFactor, this.scalingFactor)
            })
        })
        console.log(world.Height)
        console.log(world.Width)
        console.log(world)
    }}

export default CanvasWorldView