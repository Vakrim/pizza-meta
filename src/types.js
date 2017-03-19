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

declare type IngredientsState = {
  list: Array<{ ingredient: Ingredient, vote: number }>,
  minVote: number,
  maxVote: number,
};

declare type State = {
  ingredients: IngredientsState,
};
