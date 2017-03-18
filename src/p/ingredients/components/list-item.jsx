/* @flow */
import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

class Ingredient extends React.Component {
  render() {
    const {
      ingredient,
      vote,
      handleVote,
      minVote,
      maxVote,
    } = this.props;

    const activePercent = (vote - minVote) / (maxVote - minVote) * 100;

    return (
      <Item>
        {ingredient.name}
        <VoteWrapper>
          <VoteButton onClick={() => handleVote(ingredient, vote - 1)}>
            -
          </VoteButton>
          <VoteBar>
            <Vote activePercent={activePercent} />
          </VoteBar>
          <VoteButton onClick={() => handleVote(ingredient, vote + 1)}>
            +
          </VoteButton>
        </VoteWrapper>
      </Item>
    );
  }
}

const Item = styled.div`

`;

const VoteWrapper = styled.div`
  width: 150px;
  display: flex;
  overflow: hidden;
`;

const VoteBar = styled.div`
  width: 100%;
  border: 1px solid #333;
  border-radius: 3px;
  background: #F45252;
  overflow: hidden;
`;

const Vote = styled.div`
  width: ${props => props.activePercent}%;
  height: 10px;
  background: #87C540;
  transition: width 0.4s;
`;

const VoteButton = styled.div`
  width: 20px;
  font-size: 10px;
  line-height: 1;
  text-align: center;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #333;
    color: #eee;
  }
`;

export default Ingredient;
