  
import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  selectedItem: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
    .subscribe(items => this.items = items);
  }
}