import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from './../item.service';
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
  }

  buyItem(item: Item): void {
    if (this.hero.Coins > item.price){
      this.hero.Coins = this.hero.Coins - item.price;
      this.hero.items.push(item);
      item.isAvailable = false;
      this.heroService.updateHero(this.hero).subscribe();
      this.itemService.updateItem(item).subscribe();}
  }
}
