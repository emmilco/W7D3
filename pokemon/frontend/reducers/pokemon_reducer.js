import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions.js';
import { merge } from 'lodash';

export const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON :
      return merge({}, state, action.pokemon);
    case RECEIVE_POKEMON :
      return merge({}, state, {[action.pokemon.id]: action.pokemon});
    default :
      return state;
  }
};
