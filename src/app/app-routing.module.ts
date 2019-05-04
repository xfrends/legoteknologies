import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "src/app/home/home.component";
import { ArticlesComponent } from "src/app/articles/articles.component"
import { ContactComponent } from "src/app/contact/contact.component";
import { AboutComponent } from "src/app/about/about.component"
import { PortfolioComponent } from "src/app/portfolio/portfolio.component";
 
const routes: Routes = [
  {
    path: '',
    component: HomeComponent // The Default Route
    // canActivate: [AuthGuard] // User must be logged in to view this route
  },
  {
    path: 'articles',
    component: ArticlesComponent
    // canActivate: [AuthGuard] // User must be logged in to view this route
  },
  {
    path: 'about',
    component: AboutComponent
    // canActivate: [AuthGuard] // User must be logged in to view this route
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
    // canActivate: [AuthGuard] // User must be logged in to view this route
  },
  {
    path: 'contact',
    component: ContactComponent
    // canActivate: [AuthGuard] // User must be logged in to view this route
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes, {
        enableTracing: true // <-- debugging purposes only
      }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
