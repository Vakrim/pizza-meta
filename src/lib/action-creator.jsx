/* @flow */
import _ from 'lodash';

function makeActionCreators(actions) {
  return _.transform(actions, makeActionCreator, {
    creators: {},
    types: [],
  });
}

function makeActionCreator(result, argNames, type) {
  result.types[type] = type;
  result.creators[_.camelCase(type)] = function(...args) {
    let action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

export default makeActionCreators;
