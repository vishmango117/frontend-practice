import { Recipe } from 'src/app/models/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Injectable()
export class RecipeService {
  constructor(private readonly slService: ShoppingListService) {}

  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Shepards Pie',
      'Pie Containing Beef',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('Beef', 20), new Ingredient('Pie Crust', 10)]
    ),
    new Recipe(
      'Spaghetti Bolognaise',
      'Pasta with Tomato Sauce and Meatballs',
      'https://pbs.twimg.com/media/DuaWMrTXQAc2gLY.jpg',
      [new Ingredient('Spaghetti', 10), new Ingredient('Ground Beef', 25)]
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientstoSL(ingredients: Ingredient[]) {
    this.slService.addMultipleIngredients(ingredients);
  }
}
