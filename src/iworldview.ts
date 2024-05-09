import  WorldModel from "./worldmodel";

interface IWorldView{
    display(world: WorldModel): void;
}
export type {IWorldView};