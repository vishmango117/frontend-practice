import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css'],
})
export class RecipelistComponent implements OnInit {
  @Output() recipeEmitter = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Shepards Pie',
      'Pie Containing Beef',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'Spaghetti Bolognaise',
      'Pasta with Tomato Sauce and Meatballs',
      'https://pbs.twimg.com/media/DuaWMrTXQAc2gLY.jpg'
    ),
  ];

  selectRecipe(recipeId: string) {
    const selectedRecipe: Recipe | Recipe[] = this.recipes.filter(
      (currentRecipe) => currentRecipe.id === recipeId
    );
    this.recipeEmitter.emit(selectedRecipe);
  }

  constructor() {}

  ngOnInit(): void {}
}
