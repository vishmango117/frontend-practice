import { Ingredient } from './ingredient.model';

interface IRecipe {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
}

export class Recipe implements IRecipe {
  public id: string;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(
    name: string,
    description: string,
    imagePath: string,
    ingredients: Ingredient[]
  ) {
    let namesomething = name.split(' ');
    let firstchar = namesomething.map((name) => {
      name = name.toLowerCase();
      return name[0];
    });
    this.id = firstchar.join('');
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }

  getName() {
    return this.name;
  }
  getDescription() {
    return this.description;
  }
  getImagePath() {
    return this.imagePath;
  }
}
