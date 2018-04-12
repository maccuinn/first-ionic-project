import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

export class Recipe {
  title: string;
  ingredients: string[];
  instructions: string[];
}

@Component({
  selector: 'page-add-recipe',
  templateUrl: 'add-recipe.html'
})
export class AddRecipe {

  title: string = '';
  ingredient: string = '';
  instruction: string = '';
  ingredients: string[] = [];
  instructions: string[] = [];
  addTitle: boolean = false;
  addAnotherInstruction: boolean = false;
  addAnotherIngredient: boolean = false;

  constructor(public navCtrl: NavController, public storage: Storage) {
  }

  addInstruction() {
    this.instructions.push(this.instruction);
    this.instruction = '';
    this.addAnotherInstruction = false;
  }

  addIngredient() {
    this.ingredients.push(this.ingredient);
    this.ingredient = '';
    this.addAnotherIngredient = false;
  }

  setRecipe() {
    
    this.storage.set('title', this.title);
    this.storage.set('ingredients', this.ingredients);
    this.storage.set('instructions', this.instructions);
    this.addToTable();
  }

  addToTable() {
    this.storage.get('myrecipes').then((recipes) => {
      var recipe = new Recipe;
      recipe.title = this.title;
      recipe.ingredients = this.ingredients;
      recipe.instructions = this.instructions;

      if(!recipes) {
        recipes = [];
      }

      recipes.push(recipe); // Insert new row in array.
      this.storage.set('myrecipes', recipes); // Store revision.

      this.title = '';
      this.ingredients = [];
      this.instructions = [];
    })
  }
}
