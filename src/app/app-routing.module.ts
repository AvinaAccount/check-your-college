import { CollegesComponent } from './colleges/colleges.component';
import { LandingPageComponent } from './home-page/landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home", component: HomePageComponent, children: [
      { path: '', component: LandingPageComponent },
      { path: 'colleges', component: CollegesComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
