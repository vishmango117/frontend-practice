import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/services/recipe.service';
import { ShoppingListService } from 'src/services/shoppinglist.service';
import { Recipe } from '../models/recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-recipebook',
  templateUrl: './recipebook.component.html',
  styleUrls: ['./recipebook.component.css'],
})
export class RecipebookComponent implements OnInit {
  recipe: Recipe | undefined;

  constructor(
    private route: ActivatedRoute,
    private readonly recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipe(+params['id']);
    });
  }
}
