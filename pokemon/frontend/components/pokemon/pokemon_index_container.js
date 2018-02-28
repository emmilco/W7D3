import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors.js';
import PokemonIndex from './pokemon_index.jsx';
import { requestAllPokemon } from '../../actions/pokemon_actions.js';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
