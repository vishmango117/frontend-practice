import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/services/recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css'],
})
export class RecipedetailComponent implements OnInit {
  id: number = 0;
  selectedRecipe!: Recipe;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      if (!this.id) {
        this.id = 1;
      }
      this.selectedRecipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    if (this.selectedRecipe) {
      this.recipeService.addIngredientstoSL(this.selectedRecipe.ingredients);
    }
  }
}
