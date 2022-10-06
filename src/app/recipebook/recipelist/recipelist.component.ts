import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from 'src/services/recipe.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css'],
})
export class RecipelistComponent implements OnInit {
  @Output() recipeEmitter = new EventEmitter<Recipe>();

  recipes: Recipe[] = [];

  constructor(private readonly recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  selectRecipe(recipeId: string) {
    const selectedRecipe: Recipe = this.recipes.filter((currentRecipe) => {
      return currentRecipe.id === recipeId;
    })[0];
    this.recipeService.selectedRecipe.emit(selectedRecipe);
  }
}
