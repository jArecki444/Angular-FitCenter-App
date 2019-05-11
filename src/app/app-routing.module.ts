import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CenterComponent } from './center/center.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserExercisesComponent } from './exercises/user-exercises/user-exercises.component';
import { UserMealsComponent } from './meals/user-meals/user-meals.component';

const routes: Routes = [

  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegisterComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'center', component: CenterComponent},
      {path: 'exercises/user-exercises', component: UserExercisesComponent},
      {path: 'meals/user-meals', component: UserMealsComponent},
    ]
  },
  {
    path: '**', redirectTo: 'center', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
