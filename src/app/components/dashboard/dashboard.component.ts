import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
    this.recipes = JSON.parse(localStorage.getItem('recipesStorage')!);
  }

  addRecipe() {
    this.recipeService.addRecipe();
  }

  removeRecipe(idRecipe: string) {
    this.recipes = this.recipeService.removeRecipe(idRecipe, this.recipes);
  }

}
