import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Recipe } from '../models/recipe.model';
import { ManagmentRecipeComponent } from '../shared/managment-recipe/managment-recipe.component';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private dialog: MatDialog) {}

  addRecipe(recipes: Recipe[]) {
    const dialogRef = this.dialog.open(ManagmentRecipeComponent);
    let instance = dialogRef.componentInstance;
    instance.recipes = recipes;
  }

  removeRecipe(idRecipe: string, recipes: Recipe[]) {
    const filterRecipes = recipes.filter((recipe) => recipe.id !== idRecipe);
    sessionStorage.setItem('recipesStorage', JSON.stringify(filterRecipes));
    return filterRecipes;
  }
}
