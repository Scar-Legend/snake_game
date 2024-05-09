class Point {
    private xcoord: number;
    private ycoord: number;
  
    constructor(X: number, Y: number) {
      this.xcoord = X;
      this.ycoord = Y;
    }
    public get x() {
      return this.xcoord;
    }
    public get y() {
      return this.ycoord;
    }
    public equals(p: Point): boolean {
        return this.xcoord === p.x && this.ycoord === p.y
    }
  }
  export default Point;