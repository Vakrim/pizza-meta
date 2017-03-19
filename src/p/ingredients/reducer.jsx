/* @flow */
import { ingredients } from 'src/menu';
import _ from 'lodash';

const initialState: IngredientsState = {
  list: ingredients.map(i => ({
    ingredient: i,
    vote: 5,
  })),
  minVote: 0,
  maxVote: 10,
};

function calculateList(state, action: VotedIngredientAction) {
  const list = state.list.map(({ ingredient, vote }) => ({
    ingredient,
    vote: action.ingredient == ingredient ? action.vote : vote,
  }));
  const votes = [0, ..._.map(list, 'vote'), 10];
  const maxVote = _.max(votes);
  const minVote = _.min(votes);
  return {
    list,
    minVote,
    maxVote,
  };
}

export default (
  state: IngredientsState = initialState,
  action: Action
): IngredientsState => {
  switch (action.type) {
    case 'VOTE_INGREDIENT':
      return {
        ...state,
        ...calculateList(state, action),
      };
    default:
      return state;
  }
};
