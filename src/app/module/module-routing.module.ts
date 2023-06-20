import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleComponent } from './module.component';
import { AddQuestionsComponent } from './components/add-questions/add-questions.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

const routes: Routes = [
  {path:'',redirectTo:'landingpage', pathMatch:'full'},
  { path: 'addQuestion', component: AddQuestionsComponent },
 { path: 'landingpage', component: LandingpageComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
