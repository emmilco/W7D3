import React from 'react';

export default class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {

    return (
        <ul>
          {this.props.pokemon.map((poke, index) => (
            <li key={index}>{poke.name}<img width="50px" src={poke.image_url}></img></li>
          ))}
        </ul>
      );
  }
}
