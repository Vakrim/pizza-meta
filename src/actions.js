declare type VotedIngredientAction = {
  type: 'VOTE_INGREDIENT',
  ingredient: Ingredient,
  vote: number,
};

declare type Action = VotedIngredientAction | { type: 'NOOP' };
