import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CardRecipeComponent } from './card-recipe.component';

describe('CardRecipeComponent', () => {
  let component: CardRecipeComponent;
  let fixture: ComponentFixture<CardRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRecipeComponent ],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRecipeComponent);
    component = fixture.componentInstance;
    component.recipe = {
      description: 'Paella description',
      elaboration: 'Paella elaboration',
      id: '1',
      ingredients: 'Paella ingredients',
      picture:
        'https://img-global.cpcdn.com/recipes/a6c4b770a80634f0/751x532cq70/paella-valenciana-paso-a-paso-foto-principal.jpg',
      recipeName: 'Paella valenciana',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
