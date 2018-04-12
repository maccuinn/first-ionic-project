import { Component } from '@angular/core';

import { Recipes } from '../recipes/recipes';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AddRecipe } from '../add-recipe/add-recipe';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Recipes;
  tab3Root = AddRecipe;
  tab4Root = ContactPage;

  constructor() {

  }
}
