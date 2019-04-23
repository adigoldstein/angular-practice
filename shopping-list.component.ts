import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingedients : Ingredient [] = [
    new Ingredient('bread', 2),
     new Ingredient('tomatos', 10)
    ]
  constructor() { }

  ngOnInit() {
  }

}
