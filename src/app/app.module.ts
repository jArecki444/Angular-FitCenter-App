import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';
import { CenterComponent } from './center/center.component';
import { NavComponent } from './nav/nav.component';
import { UserExercisesComponent } from './exercises/user-exercises/user-exercises.component';
import { UserMealsComponent } from './meals/user-meals/user-meals.component';
import { UserMealsAddComponent } from './meals/user-meals-add/user-meals-add.component';
import { UserMealsEditComponent } from './meals/user-meals-edit/user-meals-edit.component';
import { UserMealsDeleteComponent } from './meals/user-meals-delete/user-meals-delete.component';
import { UserExercisesAddComponent } from './exercises/user-exercises-add/user-exercises-add.component';
import { UserExercisesEditComponent } from './exercises/user-exercises-edit/user-exercises-edit.component';
import { UserExercisesDeleteComponent } from './exercises/user-exercises-delete/user-exercises-delete.component';
import { UserExercisesDiaryDeleteComponent } from './exercisesDiary/user-exercises-diary-delete/user-exercises-diary-delete.component';
import { UserExercisesDiaryAddComponent } from './exercisesDiary/user-exercises-diary-add/user-exercises-diary-add.component';
import { UserExercisesDiaryEditComponent } from './exercisesDiary/user-exercises-diary-edit/user-exercises-diary-edit.component';
import { UserExercisesDiaryComponent } from './exercisesDiary/user-exercises-diary/user-exercises-diary.component';
import { UserMealsDiaryComponent } from './mealsDiary/user-meals-diary/user-meals-diary.component';
import { UserMealsDiaryAddComponent } from './mealsDiary/user-meals-diary-add/user-meals-diary-add.component';
import { UserMealsDiaryEditComponent } from './mealsDiary/user-meals-diary-edit/user-meals-diary-edit.component';
import { UserMealsDiaryDeleteComponent } from './mealsDiary/user-meals-diary-delete/user-meals-diary-delete.component';
import { UserProfileEditComponent } from './editProfile/user-profile-edit/user-profile-edit.component';
import { UserProductsAddComponent } from './products/user-products-add/user-products-add.component';
import { UserProductsEditComponent } from './products/user-products-edit/user-products-edit.component';
import { UserProductsDeleteComponent } from './products/user-products-delete/user-products-delete.component';
import { UserProductsComponent } from './products/user-products/user-products.component';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent,
      CenterComponent,
      NavComponent,
      UserExercisesComponent,
      UserMealsComponent,
      UserMealsAddComponent,
      UserMealsEditComponent,
      UserMealsDeleteComponent,
      UserExercisesAddComponent,
      UserExercisesEditComponent,
      UserExercisesDeleteComponent,
      UserExercisesDiaryDeleteComponent,
      UserExercisesDiaryAddComponent,
      UserExercisesDiaryEditComponent,
      UserExercisesDiaryComponent,
      UserMealsDiaryComponent,
      UserMealsDiaryAddComponent,
      UserMealsDiaryEditComponent,
      UserMealsDiaryDeleteComponent,
      UserProfileEditComponent,
      UserProductsAddComponent,
      UserProductsEditComponent,
      UserProductsDeleteComponent,
      UserProductsComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      FormsModule,
      MaterialModule,
      FlexLayoutModule,
      ToastrModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
