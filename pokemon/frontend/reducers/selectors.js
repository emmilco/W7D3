import { values } from 'lodash';

export const selectAllPokemon = (state) => {
  return values(state.entities.pokemon);
};

export const selectPokemon = (state, id) => {
  return state.entities.pokemon[id];
};

export const selectItems = (state, itemIds) => {
  return ( itemIds.map((id) => {
    return state.entities.items[id];
  }));
};

export const selectPokemonItem = (state, itemId) => {
  return state.entities.items[itemId];
};
