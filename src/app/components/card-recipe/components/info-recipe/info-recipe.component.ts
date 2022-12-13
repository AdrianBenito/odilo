import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'info-recipe',
  templateUrl: './info-recipe.component.html',
  styleUrls: ['./info-recipe.component.scss']
})
export class InfoRecipeComponent implements OnInit {

  recipe!: Recipe;

  constructor(private location: Location) {
  }

  ngOnInit(): void {
  }

  callBack() {
    this.location.back();
  }

}
