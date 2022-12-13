import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoRecipeComponent } from './components/card-recipe/components/info-recipe/info-recipe.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'recipe',
    component: InfoRecipeComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
