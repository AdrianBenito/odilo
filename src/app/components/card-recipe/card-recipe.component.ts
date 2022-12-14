import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.scss'],
})
export class CardRecipeComponent {
  @Input() recipe!: Recipe;
  @Output() emitRemoveRecipe: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {}

  goToInformation(idRecipe: string) {
    this.router.navigate(['recipe'], {
      queryParams: { id: idRecipe },
      state: { recipe: this.recipe },
    });
  }

  removeRecipe(idRecipe: string) {
    this.emitRemoveRecipe.emit(idRecipe);
  }
}
