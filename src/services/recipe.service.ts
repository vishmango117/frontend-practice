import { Recipe } from 'src/app/models/recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  constructor(private readonly slService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Shepards Pie',
      'Pie Containing Beef',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [new Ingredient('Beef', 20), new Ingredient('Pie Crust', 10)]
    ),
    new Recipe(
      2,
      'Spaghetti Bolognaise',
      'Pasta with Tomato Sauce and Meatballs',
      'https://pbs.twimg.com/media/DuaWMrTXQAc2gLY.jpg',
      [new Ingredient('Spaghetti', 10), new Ingredient('Ground Beef', 25)]
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number): Recipe {
    const selectedRecipe = this.recipes.find((recipe) => recipe.id === id);
    return selectedRecipe as Recipe;
  }

  addIngredientstoSL(ingredients: Ingredient[]) {
    this.slService.addMultipleIngredients(ingredients);
  }
}
