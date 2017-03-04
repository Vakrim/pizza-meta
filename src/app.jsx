import React from 'react';
import { pizzas, ingredients } from './menu';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';

let store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>

        <div>
          <div>Pizze:</div>
          <ul>
            {pizzas.map(pizza => (
              <li>
                {pizza.name}
                <ul>
                  {pizza.ingredients.map(i => <li>{i.name}</li>)}
                </ul>
              </li>
            ))}
          </ul>

          <ul>
            {ingredients.map(i => <li>{i.name}</li>)}
          </ul>
        </div>
      </Provider>
    );
  }
}
