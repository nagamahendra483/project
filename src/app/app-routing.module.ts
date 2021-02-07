import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './barchart/barchart';
import { LoginPageComponent } from './login-page/loginpage.component';
import { SignupPageComponent } from './signup-page/signuppage.component';

const routes: Routes = [
  {path:'', component: BarChartComponent},
  {path:'signup', component: SignupPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
