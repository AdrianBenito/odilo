import { TestBed } from '@angular/core/testing';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from './recipe.service';

describe('RecipeService', () => {
  let service: RecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [RecipeService],
    });
    service = TestBed.inject(RecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addRecipe', () => {
    it('should add recipe', () => {});
  });

  describe('removeRecipe', () => {
    it('should remove recipe', () => {
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
        }
      ];

      service.removeRecipe('1', mockRecipes);
      localStorage.setItem('recipesStorage', JSON.stringify(mockRecipes[1]));

      expect(mockRecipes).toContain(mockRecipes[1]);
    });
  });
});
