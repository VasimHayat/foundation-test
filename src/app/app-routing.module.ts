import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppLandingComponent } from './landing/app.landing.component';
// @ts-ignore
import { FnMenuLandingComponent } from 'foundation';
import { AppHomeComponent } from './home/app-home.component';


const routes: Routes = [
  { path: '', redirectTo: '/zip/main', pathMatch: 'full' },
  {
    path: 'zip/main', component: AppLandingComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'submenu', component: FnMenuLandingComponent },
      { path: 'home', component: AppHomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
