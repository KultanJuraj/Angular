import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { Hero } from '../hero';
import {Item} from '../item';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Input() item: Item;
  constructor() { }

  ngOnInit() {
  }

}