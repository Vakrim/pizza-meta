/* @flow */

declare type MenuItem = {
  name: string,
  desc: string,
};

declare type Ingredient = {
  name: string,
};

declare type VotedIngredient = {
  ingredient: Ingredient,
  vote: number,
};

declare type Pizza = {
  name: string,
  ingredients: Array<Ingredient>,
};

declare type RatedPizza = {
  pizza: Pizza,
  rate: number,
};

declare type IngredientsState = {
  list: Array<VotedIngredient>,
  minVote: number,
  maxVote: number,
};

declare type PizzasState = {
  list: Array<RatedPizza>,
};

declare type State = {
  ingredients: IngredientsState,
  pizzas: PizzasState,
};
