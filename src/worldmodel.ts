import Snake from "./Snake";
import  CanvasWorldView  from "./canvasWorldView";
import { IWorldView } from "./iworldview";
import Point from "./Point";

class WorldModel {
    static worldView(canvasWorldView: any) {
      throw new Error("Method not implemented.");
    }
    //private snk: Snake;
    private allSnakes: Snake[];
    private allViews: IWorldView[];
    private width: number;
    private height: number;
    //private worldView: IWorldView | null;
    //constructor(width: number, height: number) {
     // this.snk = new Snake();
     // this.width = width;
     // this.height = height;
     // this.worldView = null;
     constructor() {
      this.allSnakes = []
      this.allViews = []
      this.width = 100;
      this.height = 100;
     
    
    /*setWorldView(worldView: IWorldView) 
    {this.worldView = worldView;
    }
    set snake(s: Snake) {
      this.snake = s;
    }
    update(steps: number) {
      this.snake.move(steps);
      if (this.worldView !=null) {
        this.worldView.display(this)
      
      }
      console.log("hello")
    }
    public set WorldView(worldView: IWorldView) {
        this.worldView = worldView;
    }
  
*/
const startPosition=new Point(0,0)
this.addSnake(new Snake(startPosition,1));
this.addView(new CanvasWorldView(1))

  }
public addSnake (s: Snake) {
  this.allSnakes.push(s);
}
public addView(v: IWorldView) {
  this.allViews.push(v);
}

public update(steps: number) {
  this.allSnakes.forEach((s) => s.move(1));
  this.allViews.forEach((v) => v.display(this));
  //Snake Points are same
  const collidedSnakes: Snake[] = [];

   //detect collision
   for (let i = 0; i< this.allSnakes.length; i++) {
    const snakeA = this.allSnakes[i]; for (let j = i + 1; j < this.allSnakes.length; j++) {
      const snakeB = this.allSnakes[j];
      if (snakeA.didCollide(snakeB) && !collidedSnakes.includes(snakeA)) {
        collidedSnakes.push(snakeA);
      }
    }
   }
   //Remove colllided Snakes
   collidedSnakes.forEach((collidedSnake) => {
    const index = this.allSnakes.indexOf(collidedSnake);
    if (index !== -1) {
      this.allSnakes.splice(index,1);
    }
    });
   
// Move remaininf snakes and update views
this.allSnakes.forEach((s) => s.move(1));
this.allViews.forEach((v) => v.display(this));
  }

    

    set view(view:IWorldView){
       this.view=view;
    }
    public get snake() {
      return this.allSnakes;
    }
    public get Width(): number {
      return this.width;
    }
    public get Height(): number {
      return this.height;
    }

   
    /*public get WorldView(): IWorldView | null {
        return this.worldView;
    }*/
}
  export default WorldModel;