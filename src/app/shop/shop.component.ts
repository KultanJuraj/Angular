import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Hero } from '../hero';
import { HeroService } from './../hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  items: Item[];
  hero: Hero;
  heroCoins: number;

  constructor(private itemService: ItemService, private route: ActivatedRoute,
    private heroService: HeroService) { }

  ngOnInit(): void {
    this.loadItems();
    this.loadHero();
  }

  loadItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.items = items);
  }

  loadHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
    this.heroCoins = this.hero.Coins;
  }

  buyItem(item: Item): void {
    if (this.heroCoins > item.price){
      this.heroCoins -= item.price;
      item.isAvailable = false;
      this.hero.items.push(item);
    }
  }
}
