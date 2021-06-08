import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArraySelectionComponent } from './array-selection/array-selection.component';
import { AbilityScorePlacementComponent } from './ability-score-placement/ability-score-placement.component';



@NgModule({
  declarations: [
    ArraySelectionComponent,
    AbilityScorePlacementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArrayGenerationModule { }
