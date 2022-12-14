import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { SpyLocation } from '@angular/common/testing';
import { Location } from '@angular/common';

import { InfoRecipeComponent } from './info-recipe.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('InfoRecipeComponent', () => {
  let component: InfoRecipeComponent;
  let fixture: ComponentFixture<InfoRecipeComponent>;
  let mockLocation: Location;

  beforeEach(async(() => {
    mockLocation = jasmine.createSpyObj<Location>('Location', ['back']);
    TestBed.configureTestingModule({
      declarations: [InfoRecipeComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: '1' } },
          },
        },
        {
          provide: Location,
          useClass: mockLocation,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRecipeComponent);
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
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
