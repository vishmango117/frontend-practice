import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/services/shoppinglist.service';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
})
export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private readonly shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    // This is to ensure that if the ingredients do change we can
    this.shoppingListService.ingredientsChanged.subscribe(
      (newIngredients: Ingredient[]) => {
        this.ingredients = newIngredients;
      }
    );
  }
}
