import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModuleRoutingModule } from './module-routing.module';
import { ModuleComponent } from './module.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { AddQuestionsComponent } from './components/add-questions/add-questions.component';


@NgModule({
  declarations: [
    ModuleComponent,
    LandingpageComponent,
    AddQuestionsComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    FormsModule
  ]
})
export class ModuleModule { }
