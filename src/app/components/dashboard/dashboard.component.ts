import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';
import Recipes from 'src/app/mock/recipes.json';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [RecipeService]
})
export class DashboardComponent implements OnInit {

  recipeInfo!: Recipe[];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.recipeInfo = Recipes;
  }

  addRecipe() {
    
  }

}
