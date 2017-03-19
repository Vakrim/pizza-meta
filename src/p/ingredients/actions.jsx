/* @flow */
export const voteIngredient = (
  ingredient: Ingredient,
  vote: number
): VotedIngredientAction => ({
  type: 'VOTE_INGREDIENT',
  ingredient,
  vote,
});
