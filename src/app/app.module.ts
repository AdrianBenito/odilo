import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { AppInitService } from './core/init/app-init.service';
import { MatInputModule } from '@angular/material/input';

export function initializeApp(appInitService: AppInitService) {
  return (): Promise<any> => {
    return appInitService.appInit();
  };
}
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
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCardModule,
    CommonModule,
  ],
  providers: [
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppInitService],
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
