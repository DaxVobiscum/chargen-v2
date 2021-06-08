import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiceRollConfigurationComponent } from './dice-roll-configuration/dice-roll-configuration.component';
import { DiceRollResultComponent } from './dice-roll-result/dice-roll-result.component';



@NgModule({
  declarations: [
    DiceRollConfigurationComponent,
    DiceRollResultComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DiceRollGenerationModule { }
