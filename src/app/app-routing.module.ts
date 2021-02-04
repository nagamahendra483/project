import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/loginpage.component';
import { SignupPageComponent } from './signup-page/signuppage.component';

const routes: Routes = [
  {path:'', component: LoginPageComponent},
  {path:'signup', component: SignupPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
