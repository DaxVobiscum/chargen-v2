import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraySelectionComponent } from './array-selection.component';

describe('ArraySelectionComponent', () => {
  let component: ArraySelectionComponent;
  let fixture: ComponentFixture<ArraySelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArraySelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
