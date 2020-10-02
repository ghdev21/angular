import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  onAddItem() {
    const nameValue = this.nameInputRef.nativeElement.value;
    const amountValue = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(nameValue, amountValue);

    this.slService.addIngredient(newIngredient);
  }
}
