import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component, Inject, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
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
  fileToUpload!: File;
  imageUrl!: string;
  imageRequiredLabel = 'Imagen obligatoria';

  @ViewChild('imageInput') imageInput!: ElementRef;
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
      elaboration: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    });
  }

  handleFileInput() {
    this.fileToUpload = this.imageInput.nativeElement.files[0];

    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    if (this.fileToUpload) {
      reader.readAsDataURL(this.fileToUpload);
    }
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

    const lastItem = this.recipes.length
      ? Number(this.recipes[this.recipes.length - 1].id) + 1
      : 1;
    const recipeToPush: Recipe = {
      id: lastItem.toString(),
      recipeName: this.recipeForm.get('recipeName')?.value,
      description: this.recipeForm.get('description')?.value,
      ingredients: this.recipeForm.get('ingredients')?.value,
      elaboration: this.recipeForm.get('elaboration')?.value,
      picture: this.imageUrl
    };
    this.recipes.push(recipeToPush);
    sessionStorage.setItem('recipesStorage', JSON.stringify(this.recipes));
    return this.dialogRef.close();
  }
}
