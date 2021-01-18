import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import {Item} from '../item'

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  constructor(
    private heroService:ItemService,
    ){

  }

  model = new Item(null, '', 0);


  submit(){
      this.heroService.addItem(this.model).subscribe();
   }

  ngOnInit(): void {
  }


}
