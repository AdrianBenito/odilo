import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/service/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [RecipeService]
})
export class DashboardComponent implements OnInit {

  recipes!: Recipe[];
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = JSON.parse(sessionStorage.getItem('recipesStorage')!);
  }

  addRecipe() {
    this.recipeService.addRecipe(this.recipes);
  }

  removeRecipe(idRecipe: string) {
    this.recipes = this.recipeService.removeRecipe(idRecipe, this.recipes);
  }

}
