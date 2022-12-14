import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from './recipe.service';
import { ManagmentRecipeComponent } from '../shared/managment-recipe/managment-recipe.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';

const mockRecipes: Recipe[] = [
  {
    description: 'Paella description',
    elaboration: 'Paella elaboration',
    id: '1',
    ingredients: 'Paella ingredients',
    picture:
      'https://img-global.cpcdn.com/recipes/a6c4b770a80634f0/751x532cq70/paella-valenciana-paso-a-paso-foto-principal.jpg',
    recipeName: 'Paella valenciana',
  },
  {
    description: 'Pizza description',
    elaboration: 'Pizza elaboration',
    id: '2',
    ingredients: 'Pizza ingredients',
    picture:
      'https://static.guiainfantil.com/media/6084/c/pizza-barbacoa-un-clasico-para-ninos-md.jpg',
    recipeName: 'Pizza barbacoa',
  },
];

describe('RecipeService', () => {
  let service: RecipeService;
  let mockDialog: MatDialog;
  let spyDialogRef: any;

  spyDialogRef = jasmine.createSpy();
  spyDialogRef.componentInstance = {
    recipeForm: new FormGroup({
      recipeName: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      ingredients: new FormControl('', [Validators.required]),
      elaboration: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    }),
    recipes: [{
      description: 'Paella description',
      elaboration: 'Paella elaboration',
      id: '1',
      ingredients: 'Paella ingredients',
      picture:
        'https://img-global.cpcdn.com/recipes/a6c4b770a80634f0/751x532cq70/paella-valenciana-paso-a-paso-foto-principal.jpg',
      recipeName: 'Paella valenciana',
    },
    {
      description: 'Pizza description',
      elaboration: 'Pizza elaboration',
      id: '2',
      ingredients: 'Pizza ingredients',
      picture:
        'https://static.guiainfantil.com/media/6084/c/pizza-barbacoa-un-clasico-para-ninos-md.jpg',
      recipeName: 'Pizza barbacoa',
    }],
  };
  spyDialogRef.afterClosed = () => of(true);
  const spyMatDialog = jasmine.createSpyObj('MatDialog', ['open']);
  spyMatDialog.open.and.returnValue(spyDialogRef);

  beforeEach(() => {
    mockDialog = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);
    TestBed.configureTestingModule({
      providers: [
        RecipeService,
        {
          provide: MatDialog,
          useValue: spyMatDialog,
        },
      ],
    });
    service = TestBed.inject(RecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addRecipe', () => {
    it('should add recipe', () => {
      service.addRecipe(mockRecipes);
      expect(spyMatDialog.open).toHaveBeenCalledWith(ManagmentRecipeComponent);
    });
  });

  describe('removeRecipe', () => {
    it('should remove recipe', () => {
      service.removeRecipe('1', mockRecipes);
      localStorage.setItem('recipesStorage', JSON.stringify(mockRecipes[1]));

      expect(mockRecipes).toContain(mockRecipes[1]);
    });
  });
});
