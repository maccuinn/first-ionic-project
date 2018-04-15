import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Recipe } from '../add-recipe/add-recipe';
import { RecipeService } from '../../services/recipes-service';
import { RecipeDetailsPage } from '../../recipe-details/recipe-details';

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
  providers: [RecipeService]
})
export class Recipes {

  recipes: Recipe[] = [];
  sampleRecipes: Recipe[] = [];
  _dataService: RecipeService;

  constructor(public navCtrl: NavController, public storage: Storage, dataService: RecipeService) {
    
    this._dataService = dataService;

    storage.ready().then(() => {
      if(!this.storage.get('myrecipes')) {
        var storedRecipe = new Recipe;
        storedRecipe.title = 'Title';
        storedRecipe.ingredients = [];
        storedRecipe.instructions = [];
        this.recipes.push(storedRecipe);

        console.log('Storing default recipe');
        this.storage.set('myrecipes', this.recipes);
      }
    });

    this.getSampleRecipes();
  }

  getSampleRecipes() {
    this._dataService.getRecipes()
      .subscribe( data => {
        this.sampleRecipes = data.recipes;
        console.log(JSON.stringify(data))
      },
      error => {
        alert(error)
      },
      () => {
        console.log('Finished');
      });
  }

  ionViewWillEnter() {
    this.getStoredRecipes();
  }

  getStoredRecipes() {
    this.storage.get('myrecipes').then((recipes) => {
      this.recipes = recipes || [];
    });
  }

  openRecipeDetailsPage(item) {
    this.navCtrl.push(RecipeDetailsPage, { item: item});
  }
}
