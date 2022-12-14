import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'info-recipe',
  templateUrl: './info-recipe.component.html',
  styleUrls: ['./info-recipe.component.scss'],
})
export class InfoRecipeComponent implements OnInit {
  recipe!: Recipe;

  constructor(private location: Location, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.recipe = history.state.recipe
      ? history.state.recipe
      : this.findRecipeFromStorage(this.route.snapshot.queryParamMap.get('id'));
  }

  callBack() {
    this.location.back();
  }

  private findRecipeFromStorage(idRecipe: string|null) {
    const recipesParsed: Recipe[] = JSON.parse(localStorage.getItem('recipesStorage')!);
    return recipesParsed.find((recipe) => recipe.id === idRecipe);
  }
}
