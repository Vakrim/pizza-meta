/* @flow */
import React from 'react';
import { pizzas, ingredients } from './menu';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import { MyIngredients } from 'p/ingredients';
import styled from 'styled-components';

let store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Page>
        <IngredientsBar>
          <MyIngredients ingredients={ingredients} />
        </IngredientsBar>
        <div>
          <div>Pizze:</div>
          <ul>
            {pizzas.map(pizza => (
              <li key={pizza.name}>
                {pizza.name}
              </li>
            ))}
          </ul>
        </div>
      </Page>
    );
  }
}

const Page = styled.div`
  display: flex;
`;

const IngredientsBar = styled.div`
  width: 200px;
  height: 100vh;
  padding: 10px;
  overflow: scroll;
`;
