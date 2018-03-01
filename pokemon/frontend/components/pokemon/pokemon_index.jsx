import React from 'react';
import { Route } from 'react-router-dom';
import PokemonIndexItem from './pokemon_index_item.jsx';
import PokemonDetailContainer from './pokemon_detail_container.js';


export default class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }


  render() {
    const pokemonItems = this.props.pokemon.map((poke) => {
      return (<PokemonIndexItem key={poke.id} pokemon={poke} />);
    });

    return (
      <div>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <ul>
          {pokemonItems}
        </ul>
      </div>
      );
  }
}
