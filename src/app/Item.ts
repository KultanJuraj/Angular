export interface Item {
    id: number;
    name: string;
    price: number;
    isAvailable: boolean;
  }

  export class Item {

    constructor(
      public id: number,
      public name: string,
      public Price: number,
    ){}
  }