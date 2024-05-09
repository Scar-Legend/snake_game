import display from "./display";
import Point from "./Point";

// place your code on line 5 above the export statement below


class Snake {
  private currentParts: Point[];
  private currentDirection: number;
  static X: number;
  static y: any;
  static Y: any;
  //private point: Point;
  //private color: string;
  constructor(startPosition: Point, size: number) {
    this.currentParts = [startPosition];
    for (let i = 1; i < size; i++) {
      if (startPosition.x !== 0) {
        this.currentParts.push(new Point(startPosition.x - i, startPosition.y));
      } else {
        this.currentParts.push(new Point(startPosition.x, startPosition.y - i));

      }
    }
    this.currentDirection = 1
    //this.currentParts = new Point(0, 0);
    //this.point = new Point(this.currentPosition.X, this.currentPosition.Y);
    //this.color = color;
  }
  public move(move: number) {
    display(
      "The Snake Moves",move,"times");
      const head = this.currentParts[0];
      let newX = head.x;
      let newY = head.y;

      switch (this.currentDirection) {
        case 1:
          newX += move;
          break;
        case -1:
          newX -= move;
          break;
        case 2:
          newY -= move;
          break;
        case -2:
          newY += move;
          break;
      }

      const newHead = new Point(newX, newY);
      this.currentParts.unshift(newHead); // Add new head
      this.currentParts.pop(); // Remove last tail

          // Move the rest of the body
    for (let i = this.currentParts.length - 1; i > 0; i--) {
      this.currentParts[i] = this.currentParts[i - 1];
    }
          // Update the current head position
    this.currentParts[0] = newHead;
  }

  public didCollide(s: Snake): boolean {
    const head = this.currentParts[0];
    const tail = s.getAllParts().slice(1);
    return tail.some((part: { x: number; y: number; }) => part.x === head.x && part.y === head.y)
  }
    
  
  
  /**
     * Direction 1 = Right
     */
   /* if (this.currentDirection === 1) {
      this.currentPosition = new Point(
        this.currentPosition.x + move,
        this.currentPosition.y,
      );*/
       /**
     * Direction -1 = Left
     */
    /*} else if (this.currentDirection === -1) {
      this.currentPosition = new Point(
        this.currentPosition.x - move,
        this.currentPosition.y,
      );*/
       /**
     * Direction 2 = Up
     */
    /*} else if (this.currentDirection === 2) {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y - move,
      );*/
       /**
     * Direction -2 = Down
     */
    /*} else if (this.currentDirection === -2) {
      this.currentPosition = new Point(
        this.currentPosition.x,
        this.currentPosition.y + move,
      );
    }*/  

  

  /**
   * @deprecated Use {@link turnLeft,turnRight instead} instead.
   */
  
  public turn() {
    display("The Snake Turns");
    if (this.currentDirection === -1) {
      this.currentDirection = 1;
    } else if (this.currentDirection === 1) {
      this.currentDirection = -1;
    } else {
      this.currentDirection = 0;
    }
  }

  public turnLeft() {
    display("The Snake Turns Left");
    if (this.currentDirection === 1) {
      this.currentDirection = 2;
    } else if (this.currentDirection === 2) {
      this.currentDirection = -1;
    } else if (this.currentDirection === -1) {
      this.currentDirection = -2;
    } else  {
      this.currentDirection = 1;
    } 
  }

  public turnRight() {
    display("The Snake Turns Right");
    if (this.currentDirection === 1) {
      this.currentDirection = -2;
    } else if (this.currentDirection === -2) {
      this.currentDirection = -1;
    } else if (this.currentDirection === -1) {
      this.currentDirection = 2;
    } else  {
      this.currentDirection = 1;
    } 
  }
  public get position() {
    return this.currentParts[1]
  }
  public getAllParts(): Point[] {
    return this.currentParts.slice();
  }
  public getCurrentDirection(): number {
    return this.currentDirection;
  }
}


export default Snake;
