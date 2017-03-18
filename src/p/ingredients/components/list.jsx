/* @flow */
import React from 'react';
import styled from 'styled-components';
import Ingredient from './list-item';

class IndgredientsList extends React.Component {
  render() {
    const {
      ingredients: {
        list,
        ...rest
      },
      handleVote,
    } = this.props;

    return (
      <div>
        {list.map(i => (
          <Ingredient key={i.name} handleVote={handleVote} {...i} {...rest} />
        ))}
      </div>
    );
  }
}

export default IndgredientsList;
