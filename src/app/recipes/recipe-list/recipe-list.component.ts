import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("Test Recipe", "Test desc", "https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe-f.jpg"),
    new Recipe("Recipe Two", "Test Desc", "https://hips.hearstapps.com/hmg-prod/images/shrimp-scampi-recipe-2-66194bae4e71a.jpg?crop=0.8888888888888888xw:1xh;center,top")
  ];
  
  constructor(){}

}
