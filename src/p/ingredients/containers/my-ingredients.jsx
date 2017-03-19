/* @flow */
import { connect } from 'react-redux';
import List from '../components/list';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import type { Dispatch, Store } from 'redux';

const mapStateToProps = (state: State) => {
  return {
    ingredients: state.ingredients,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return bindActionCreators(
    {
      handleVote: actions.voteIngredient,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
