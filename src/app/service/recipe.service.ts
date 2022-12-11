import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}

  addRecipe() {
    
  }

  removeRecipe() {
    localStorage.removeItem('recipeSelected');
  }
}
