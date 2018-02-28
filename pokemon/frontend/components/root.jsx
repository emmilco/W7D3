import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container.js';

export const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <PokemonIndexContainer />
    </Provider>
  );
};
