import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  ViewChild,
  Output,
} from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/services/shoppinglist.service';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css'],
})
export class ShoppinglisteditComponent implements OnInit {
  @ViewChild('nameInput')
  nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;

  addIngredientHandler() {
    // Reading from @ViewChild element.
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.shoppingListService.addIngredient(newIngredient);
  }

  constructor(private readonly shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}
}
