import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityScorePlacementComponent } from './ability-score-placement.component';

describe('AbilityScorePlacementComponent', () => {
  let component: AbilityScorePlacementComponent;
  let fixture: ComponentFixture<AbilityScorePlacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilityScorePlacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityScorePlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
