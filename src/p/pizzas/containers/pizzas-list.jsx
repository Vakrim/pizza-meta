/* @flow */
import { connect } from 'react-redux';
import List from '../components/list';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import type { Dispatch, Store } from 'redux';

const mapStateToProps = (state: State) => {
  return {
    list: state.pizzas.list,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
