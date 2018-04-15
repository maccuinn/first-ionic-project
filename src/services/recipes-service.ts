import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Recipe } from '../pages/add-recipe/add-recipe';

export interface RecipeResults { recipes: Recipe[] }

@Injectable()
export class RecipeService {
    private dataUrl = '../assets/recipes.json';

    constructor(private http: Http) { }

    getRecipes(): Observable<RecipeResults> {
        return this.http.get(this.dataUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message : 
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}