/* @flow */
import { connect } from 'react-redux';
import List from '../components/list';
import { bindActionCreators } from 'redux';
import actions from '../actions';

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      handleVote: actions.creators.voteIngredient,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
