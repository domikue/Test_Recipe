import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe [] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcR4yEBwFg25dEbZgIVEgRlie0-PCaiPWIc_CDVRWm2B3fwc0ko%26s&sp=1622378549Tf5be32ba6986f092f262eb2c72b85f3e5b107e1c84a8ff041bc800adb1bbbce9',
      ingredients: ['French Fries', 'Pork meat', 'Salad']
  
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fstatic.livingathome.de%2Fbilder%2F51%2Fcf%2F52977%2Ffacebook_image%2Flah200809spaghetti-mit-frischer-tomatensosse.jpg&sp=1622378760Ta0018bdecf69bce5e2cd8ae33cd2f63120ff04859bcdb2a7720406811d7d7e09',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
  
    }
  ];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })}
  }
}
