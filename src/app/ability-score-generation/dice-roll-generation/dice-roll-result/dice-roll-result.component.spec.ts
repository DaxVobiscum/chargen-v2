import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollResultComponent } from './dice-roll-result.component';

describe('DiceRollResultComponent', () => {
  let component: DiceRollResultComponent;
  let fixture: ComponentFixture<DiceRollResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiceRollResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceRollResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
