import { RecommendationService } from './../recommendation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
  providers: [RecommendationService]
})
export class WizardComponent implements OnInit {
  protected steps: String[]
  protected currentStep: String
  private stepIndex: number = 0

  constructor(private rs: RecommendationService) {
    this.steps = ['comfort', 'activities', 'ecological']
    this.currentStep = this.steps[this.stepIndex]
  }

  ngOnInit() {
  }

  preferencePicked(value: String) {
    this.rs.setPreference(this.currentStep, value)
    this.currentStep = this.steps[++this.stepIndex]
  }

  get selection() {
    return Array.from( this.rs.getAllPreferences().entries()).map((value, key) => {
      return {name: key, value: value}
    })
  }

}
