/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {
  list: Array<RatedPizza>,
};

class IndgredientsList extends React.Component {
  props: Props;

  render() {
    const {
      list,
    } = this.props;

    return (
      <div>
        {list.map(p => <div />)}
      </div>
    );
  }
}

export default IndgredientsList;
