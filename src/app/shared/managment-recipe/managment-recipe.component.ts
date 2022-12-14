import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component, Inject, OnInit, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recipe } from 'src/app/models/recipe.model';

const alertMessage =
  '¡Los datos introducidos no son válidos! ¡Repasa los campos!';
@Component({
  selector: 'managment-recipe',
  templateUrl: './managment-recipe.component.html',
  styleUrls: ['./managment-recipe.component.scss'],
})
export class ManagmentRecipeComponent implements OnInit {
  recipeForm!: FormGroup;

  @Input() recipes!: Recipe[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ManagmentRecipeComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.recipeForm = this.fb.group({
      recipeName: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      ingredients: new FormControl('', [Validators.required]),
      elaboration: new FormControl('', [Validators.required])
    });
  }

  saveRecipe() {
    if (this.recipeForm.invalid) {
      Object.keys(this.recipeForm.controls).forEach((field) => {
        const control = this.recipeForm.get(field);
        if (control instanceof FormControl && control?.invalid) {
          control.markAsTouched({ onlySelf: true });
          control.markAsDirty();
        }
      });
      return alert(alertMessage);
    }

    const lastItem = Number(this.recipes[this.recipes.length - 1].id) + 1;
    const recipeToPush: Recipe = {
      id: lastItem.toString(),
      recipeName: this.recipeForm.get('recipeName')?.value,
      description: this.recipeForm.get('description')?.value,
      ingredients: this.recipeForm.get('ingredients')?.value,
      elaboration: this.recipeForm.get('elaboration')?.value,
      picture: '/assets/ratatuile.jpg' // test
    };
    this.recipes.push(recipeToPush);
    localStorage.setItem('recipesStorage', JSON.stringify(this.recipes));
    return this.dialogRef.close();
  }
}
