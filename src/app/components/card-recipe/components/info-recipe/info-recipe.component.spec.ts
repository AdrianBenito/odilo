import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRecipeComponent } from './info-recipe.component';

describe('InfoRecipeComponent', () => {
  let component: InfoRecipeComponent;
  let fixture: ComponentFixture<InfoRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
