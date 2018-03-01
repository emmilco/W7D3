import { RECEIVE_POKEMON } from '../actions/pokemon_actions.js';
import { merge } from 'lodash';

export const itemsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POKEMON :
      return action.items;

    default :
      return state;
  }
};
