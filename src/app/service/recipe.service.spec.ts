import { TestBed } from '@angular/core/testing';
import { RecipeService } from './recipe.service';

describe('RecipeService', () => {
  let service: RecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        RecipeService
      ],
    });
    service = TestBed.inject(RecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addRecipe', () => {
    it('should add recipe', () => {
    
    });
  });

  describe('removeRecipe', () => {
    it('should remove recipe', () => {
      
    });
  });
});
