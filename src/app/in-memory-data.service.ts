import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr Nice', items: [], Coins:100 },
      { id: 2, name: 'Narco', items: [], Coins:100 },
      { id: 3, name: 'Bombasto', items: [], Coins:100 },
      { id: 4, name: 'Celeritas', items: [], Coins:100 },
      { id: 5, name: 'Magneta', items: [], Coins:100 },
      { id: 6, name: 'RubberMan', items: [], Coins:100 },
      { id: 7, name: 'Dynama', items: [], Coins:100 },
      { id: 8, name: 'Dr IQ', items: [], Coins:100 },
      { id: 9, name: 'Magma', items: [], Coins:100 },
      { id: 10, name: 'Tornado', items: [], Coins:100 }
    ];
    const items = [
      { id: 1, name: 'Elixir of life' , price : 14, isAvailable:true},
      { id: 2, name: 'Iron helmet', price : 25, isAvailable:true},
      { id: 3, name: 'Iron Gloves' , price : 30,isAvailable:true},
      { id: 4, name: 'Iron trousers' , price : 31,isAvailable:true},    
      { id: 5, name: 'Iron Helmet' , price : 32,isAvailable:true},
      { id: 6, name: 'Iron Chestplate' , price : 35,isAvailable:true},    
      { id: 7, name: 'Iron Spear' , price : 62,isAvailable:true},
      { id: 8, name: 'Iron Sword' , price : 63,isAvailable:true},
      { id: 9, name: 'Saphire', price : 81 ,isAvailable:true},
      { id: 10, name: 'Diamond', price : 93 ,isAvailable:true}
  ];
    return{heroes, items};
  }
  genId(object: any[]): number {
    return object.length > 0 ? Math.max(...object.map(hero => hero.id)) + 1 : 11;
  }
}
