import { Injectable }  from '@angular/core';
import MockRecipes from 'src/app/json/mock-recipes.json';
 
@Injectable()
export class AppInitService {
 
    appInit() {
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                localStorage.setItem('recipesStorage', JSON.stringify(MockRecipes));
                resolve();
            });
        });
    }
}