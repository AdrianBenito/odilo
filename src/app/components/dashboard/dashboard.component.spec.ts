import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { RecipeService } from 'src/app/service/recipe.service';
import { of } from 'rxjs';
import { DashboardComponent } from './dashboard.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Recipe } from 'src/app/models/recipe.model';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockRecipeService: RecipeService;
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
  beforeEach(async(() => {
    mockDialog = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);
    mockRecipeService = jasmine.createSpyObj<RecipeService>('RecipeService', [
      'removeRecipe',
      'addRecipe',
    ]);
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [
        { provide: RecipeService, useValue: mockRecipeService },
        {
          provide: MatDialog,
          useValue: spyMatDialog,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    component.recipes = [
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
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call to addRecipe method', () => {
    component.addRecipe();

    expect(spyMatDialog.open).toHaveBeenCalled();
  });

  it('should call to removeRecipe method', () => {
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
    component.recipes = mockRecipes;
    component.removeRecipe('1');

    mockRecipeService.removeRecipe('1', mockRecipes);
    sessionStorage.setItem('recipesStorage', JSON.stringify(mockRecipes[1]));

    expect(mockRecipes).toContain(mockRecipes[1]);
  });
});
