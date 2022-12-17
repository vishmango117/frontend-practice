import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from 'src/services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css'],
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  selectRecipe(recipeId: number) {
    this.router.navigate([recipeId], { relativeTo: this.route });
  }
}
