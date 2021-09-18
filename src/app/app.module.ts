import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './home-page/landing-page/landing-page.component';
import { CollegesComponent } from './colleges/colleges.component';
import { CollegeItemComponent } from './colleges/college-item/college-item.component';
import { CourseComponent } from './colleges/course/course.component';
import { CourseItemComponent } from './colleges/course/course-item/course-item.component';
import { CoursePageComponent } from './colleges/course/course-page/course-page.component';
import { CommentComponent } from './colleges/course/course-page/comment/comment.component';
import { FormsModule, NgForm } from '@angular/forms';
import { RegistrationComponent } from './login/registration/registration.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LandingPageComponent,
    CollegesComponent,
    CollegeItemComponent,
    CourseComponent,
    CourseItemComponent,
    CoursePageComponent,
    CommentComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
