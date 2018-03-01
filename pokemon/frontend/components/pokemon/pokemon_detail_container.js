import { connect } from 'react-redux';
// import PokemonDetail from './pokemon_detail.jsx';
// import { selectPokemon } from '../../reducers/selectors.js';
import { requestPokemon } from '../../actions/pokemon_actions.js';
import PokemonDetail from './pokemon_detail.jsx';
import { selectPokemon, selectItems } from '../../reducers/selectors.js';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.pokemonId;
  let itemIds;
  if (!state.entities.pokemon[id] || !state.entities.pokemon[id].item_ids) {
    itemIds = [];
  } else {
    itemIds = state.entities.pokemon[id].item_ids;
  }
  return {
    pokemon: selectPokemon(state, id),
    items: selectItems(state, itemIds)
  };
};

const mapDispatchToProps = dispatch => ({
  requestPokemon: (id) => dispatch(requestPokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
