import {Item} from './item';
export interface Hero {
    id: number;
    name: string;
    items?: Item[];
    Coins: number;
    Lifes: number;
    Strenght: number;
  }
  export class Hero {

    constructor(
      public id: number,
      public name: string,
      public items?: Item[],
      public Coins: number,
      public Life: number,
      public Strength: number
    ){}
  }