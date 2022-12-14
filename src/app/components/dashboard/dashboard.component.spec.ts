import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeService } from 'src/app/service/recipe.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockRecipeService: RecipeService;

  beforeEach(async(() => {
    mockRecipeService = jasmine.createSpyObj<RecipeService>('RecipeService', ['removeRecipe']);
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        { provide: RecipeService, useValue: mockRecipeService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
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
      }
    ];
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
