import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendationComponent } from './recommendation.component';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {path: 'my-recommendations', component: RecommendationComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', children: []}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
