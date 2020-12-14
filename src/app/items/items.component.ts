import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

enum SortBy { ID = "Id", NAME = "Name", PRICE = "Price" };
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
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  selectedItem: Item;
  dropdown: dropDownMenu = new dropDownMenu(SortBy);
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }
  displayItemDetail(item: Item): void {
    this.selectedItem = item; 
  }

  getItems(): void {
    this.itemService.getItems()
    .subscribe(items => this.items = items);
  }
  sortBy(sortBy : SortBy, descending : boolean){
    switch (sortBy){
      case SortBy.ID:
        this.items.sort((a, b) => a.id - b.id);
        break;
      case SortBy.PRICE:
        this.items.sort((a, b) => a.price - b.price);
        break;
      case SortBy.NAME:
        this.items.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
    if (descending) this.items.reverse();
  }
}