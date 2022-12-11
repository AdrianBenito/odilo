import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentRecipeComponent } from './managment-recipe.component';

describe('ManagmentRecipeComponent', () => {
  let component: ManagmentRecipeComponent;
  let fixture: ComponentFixture<ManagmentRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagmentRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagmentRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
