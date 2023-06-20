import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'login',component:LoginPageComponent},
  { path: 'questionField', loadChildren: () => import('./module/module.module').then(m => m.ModuleModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
