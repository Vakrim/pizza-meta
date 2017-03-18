/* @flow */
import { ingredients } from 'src/menu';
import actions from './actions';

const initialState = {
  list: ingredients.map(i => ({
    ingredient: i,
    vote: 5,
  })),
  minVote: 0,
  maxVote: 10,
};

function calculateList(oldList, action) {
  const list = oldList.map(({ ingredient, vote }) => ({
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

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.types.VOTE_INGREDIENT:
      return {
        ...state,
        ...calculateList(state.list, action),
      };
    default:
      return state;
  }
};
