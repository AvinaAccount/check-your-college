import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageComponent } from './home-page/landing-page/landing-page.component';
import { CollegesComponent } from './colleges/colleges.component';
import { CollegeItemComponent } from './colleges/college-item/college-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LandingPageComponent,
    CollegesComponent,
    CollegeItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
