import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/services/recipe.service';
import { ShoppingListService } from 'src/services/shoppinglist.service';
import { Recipe } from '../models/recipe.model';
@Component({
  selector: 'app-recipebook',
  templateUrl: './recipebook.component.html',
  styleUrls: ['./recipebook.component.css'],
})
export class RecipebookComponent implements OnInit {
  @Input()
  selectedRecipe!: Recipe;

  constructor(private readonly recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
