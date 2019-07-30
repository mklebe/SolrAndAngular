import { WizardComponent } from './../wizard/wizard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router'
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: WizardComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
