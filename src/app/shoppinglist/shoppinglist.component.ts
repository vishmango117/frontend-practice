import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/services/shoppinglist.service';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
})
export class ShoppinglistComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private igChangeSub!: Subscription;

  constructor(private readonly shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    // This is to ensure that if the ingredients do change we can
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (newIngredients: Ingredient[]) => {
        this.ingredients = newIngredients;
      }
    );
  }
  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }
}
