interface IRecipe {
  name: string;
  description: string;
  imagePath: string;
}

export class Recipe implements IRecipe {
  public id: string;
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    let namesomething = name.split(' ');
    let firstchar = namesomething.map((name) => {
      name = name.toLowerCase();
      return name[0];
    });
    this.id = firstchar.join('');
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
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
