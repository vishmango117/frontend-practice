interface IIngredient {
  name: string;
  amount: number;
}

export class Ingredient implements IIngredient {
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
}
