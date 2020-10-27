import { Component, OnInit } from '@angular/core';
import {Item} from '../Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items:Item = {
    id:1,
    name:"Meat",
    price: "25"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
