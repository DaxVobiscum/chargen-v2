import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollConfigurationComponent } from './dice-roll-configuration.component';

describe('DiceRollConfigurationComponent', () => {
  let component: DiceRollConfigurationComponent;
  let fixture: ComponentFixture<DiceRollConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiceRollConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceRollConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
