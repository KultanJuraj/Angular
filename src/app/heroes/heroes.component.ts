import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';


enum SortBy { ID = "Id", NAME = "Name", MONEY = "Money", LIFE = "Life", STRENGHT = "Strenght" };
class dropDownMenu{
  selected: any;
  descending: boolean = false;
  show: boolean = false;
  options: any;
  constructor(options : any){
    this.options = Object.values(options);
    this.selected = this.options[0];
  }
}
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  dropdown: dropDownMenu = new dropDownMenu(SortBy);

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  sortBy(sortBy : SortBy, descending : boolean){
    switch (sortBy){
      case SortBy.ID:
        this.heroes.sort((a, b) => a.id - b.id);
        break;
      case SortBy.MONEY:
        this.heroes.sort((a, b) => a.Coins - b.Coins);
        break;
      case SortBy.NAME:
        this.heroes.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case SortBy.LIFE:
          this.heroes.sort((a, b) => a.Lifes - b.Lifes);
          break; 
          case SortBy.STRENGHT:
            this.heroes.sort((a, b) => a.Strenght - b.Strenght);
            break;     
    }
    if (descending) this.heroes.reverse();
  }
}
