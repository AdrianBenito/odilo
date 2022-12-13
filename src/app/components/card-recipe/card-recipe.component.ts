import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.scss']
})
export class CardRecipeComponent {

  @Input() recipe!: Recipe;

  constructor(private router: Router) {}

  goToInformation(idRecipe: string) {
    this.router.navigate(['recipe'], {queryParams: {id: idRecipe}, state: {recipe: this.recipe}});
  }
}
