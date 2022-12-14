import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Recipe } from '../models/recipe.model';
import { ManagmentRecipeComponent } from '../shared/managment-recipe/managment-recipe.component';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private dialog: MatDialog) {}

  addRecipe() {
    this.dialog.open(ManagmentRecipeComponent);
  }

  removeRecipe(idRecipe: string, recipes: Recipe[]) {
    const filterRecipes = recipes.filter((recipe) => recipe.id !== idRecipe);
    localStorage.setItem('recipesStorage', JSON.stringify(filterRecipes));
    return filterRecipes;
  }
}
