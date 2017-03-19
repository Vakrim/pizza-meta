/* @flow */
import React from 'react';
import styled from 'styled-components';
import IngredientItem from './list-item';

type Props = {
  ingredients: {
    list: Array<VotedIngredient>,
    minVote: number,
    maxVote: number,
  },
  handleVote: Function,
};

class IndgredientsList extends React.Component {
  props: Props;

  render() {
    const {
      ingredients: {
        list,
        maxVote,
        minVote,
      },
      handleVote,
    } = this.props;

    return (
      <div>
        {list.map(i => (
          <IngredientItem
            ingredient={i}
            key={i.ingredient.name}
            handleVote={handleVote}
            maxVote={maxVote}
            minVote={minVote}
          />
        ))}
      </div>
    );
  }
}

export default IndgredientsList;
