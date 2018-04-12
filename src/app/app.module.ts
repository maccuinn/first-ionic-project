import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Recipes } from '../pages/recipes/recipes';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { AddRecipe } from '../pages/add-recipe/add-recipe';
import { RecipeDetailsPage } from '../recipe-details/recipe-details';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    Recipes,
    ContactPage,
    HomePage,
    AddRecipe,
    RecipeDetailsPage,
    TabsPage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Recipes,
    ContactPage,
    HomePage,
    AddRecipe,
    RecipeDetailsPage,
    TabsPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
