import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'recipe-details.html',
}) 

export class RecipeDetailsPage {
    item;

    constructor(params: NavParams) {
        this.item = params.data.item;
    }
}