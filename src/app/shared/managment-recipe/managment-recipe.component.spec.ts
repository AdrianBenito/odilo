import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { ManagmentRecipeComponent } from './managment-recipe.component';

describe('ManagmentRecipeComponent', () => {
  let component: ManagmentRecipeComponent;
  let fixture: ComponentFixture<ManagmentRecipeComponent>;
  let mockMatDialogRef: MatDialogRef<ManagmentRecipeComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    mockMatDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    TestBed.configureTestingModule({
      declarations: [ManagmentRecipeComponent],
      imports: [MatDialogModule, ReactiveFormsModule, FormsModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
        { provide: MatDialogRef, useValue: mockMatDialogRef },
        { provide: FormBuilder, useValue: formBuilder },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagmentRecipeComponent);
    component = fixture.componentInstance;
    component.recipeForm = formBuilder.group({
      recipeName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      ingredients: ['', [Validators.required]],
      elaboration: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('valid all formcontrol', () => {
    let errorsName: ValidationErrors = {};
    let errorsDescription: ValidationErrors = {};
    let errorsIngredients: ValidationErrors = {};
    let errorsElaboration: ValidationErrors = {};
    let errorsImage: ValidationErrors = {};
    let recipeName = component.recipeForm.controls['recipeName'];
    let description = component.recipeForm.controls['description'];
    let ingredients = component.recipeForm.controls['ingredients'];
    let elaboration = component.recipeForm.controls['elaboration'];
    let image = component.recipeForm.controls['image'];

    errorsName = recipeName.errors || {};
    errorsDescription = description.errors || {};
    errorsIngredients = recipeName.errors || {};
    errorsElaboration = recipeName.errors || {};
    errorsImage = recipeName.errors || {};

    expect(recipeName.valid).toBeFalsy();
    expect(description.valid).toBeFalsy();
    expect(ingredients.valid).toBeFalsy();
    expect(elaboration.valid).toBeFalsy();
    expect(image.valid).toBeFalsy();

    expect(errorsName['required']).toBeTruthy();
    expect(errorsDescription['required']).toBeTruthy();
    expect(errorsIngredients['required']).toBeTruthy();
    expect(errorsElaboration['required']).toBeTruthy();
    expect(errorsImage['required']).toBeTruthy();

    recipeName.setValue('Paella valenciana');
    description.setValue('Paella description');
    ingredients.setValue('Paella ingredients');
    elaboration.setValue('Paella elaboration');
    image.setValue('Paella elaboration');

    errorsName = recipeName.errors || {};
    errorsDescription = description.errors || {};
    errorsIngredients = ingredients.errors || {};
    errorsElaboration = elaboration.errors || {};
    errorsImage = image.errors || {};

    expect(errorsName['required']).toBeFalsy();
    expect(errorsDescription['required']).toBeFalsy();
    expect(errorsIngredients['required']).toBeFalsy();
    expect(errorsElaboration['required']).toBeFalsy();
    expect(errorsImage['required']).toBeFalsy();

    expect(errorsName['required']).toBeFalsy();
    expect(errorsDescription['required']).toBeFalsy();
    expect(errorsIngredients['required']).toBeFalsy();
    expect(errorsElaboration['required']).toBeFalsy();
    expect(errorsImage['required']).toBeFalsy();
  });
});
