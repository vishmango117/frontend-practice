import { Ingredient } from './ingredient.model';

interface IRecipe {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
}

export class Recipe implements IRecipe {
  public id: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(
    id: number,
    name: string,
    description: string,
    imagePath: string,
    ingredients: Ingredient[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
