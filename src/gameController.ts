import  WorldModel  from "./worldmodel";
import Player from "./Player";


class GameController {
    private _player1: Player;
    private _player2: Player;
    private _world: WorldModel
    constructor(W: WorldModel, p: Player)
 {
    this._world = W
    this._player1= p
    this._player2= p
 }
 set player1(p: Player){
    this._player1 = p;
 }
 set player2(p: Player){
    this._player2 = p;
 }
 run() {
   let lasttime=0
   const updateframe = (miliseconds:number) => {
      if(
         miliseconds - lasttime > 150
      )
      {
         this._player1.makeTurn()
         this._player2.makeTurn()
         this._world.update(1)
         lasttime = lasttime + 150
      }
      requestAnimationFrame(updateframe)
   };
   requestAnimationFrame(updateframe)
 }
}
export default GameController
 