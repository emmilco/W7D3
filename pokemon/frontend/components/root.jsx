import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import PokemonIndexContainer from './pokemon/pokemon_index_container.js';
import PokemonDetailContainer from './pokemon/pokemon_detail_container.js';

export const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <Route path="/" component={PokemonIndexContainer} />
        </div>
      </HashRouter>
    </Provider>
  );
};
