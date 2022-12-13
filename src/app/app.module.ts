import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardRecipeComponent } from './components/card-recipe/card-recipe.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManagmentRecipeComponent } from './shared/managment-recipe/managment-recipe.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { InfoRecipeComponent } from './components/card-recipe/components/info-recipe/info-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardRecipeComponent,
    ManagmentRecipeComponent,
    InfoRecipeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCardModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
