import { CoursePageComponent } from './colleges/course/course-page/course-page.component';
import { CourseComponent } from './colleges/course/course.component';
import { CollegesComponent } from './colleges/colleges.component';
import { LandingPageComponent } from './home-page/landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home", component: HomePageComponent, children: [
      { path: '', component: LandingPageComponent },
      { path: 'colleges', component: CollegesComponent },
      { path: 'colleges/:id', component: CourseComponent },
      { path: 'colleges/:id/:id', component: CoursePageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'login/registration', component: RegistrationComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
