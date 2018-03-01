import React from 'react';
import ItemDetailContainer from '../items/item_detail_container.js';
import { Route, Link } from 'react-router-dom';
class PokemonDetail extends React.Component {


  componentDidMount () {
    this.props.requestPokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.match.params.pokemonId !== nextProps.match.params.pokemonId) {
      this.props.requestPokemon(nextProps.match.params.pokemonId);
    }
  }

  render () {
    if (!this.props.pokemon || !this.props.pokemon.moves) {
      return "Please wait, we really are trying...";
    }
    const poke = this.props.pokemon;
    const items = this.props.items;

    return (
      <div>
        <ul className="pokedetails">
          <img src={poke.image_url}></img>
          <li> {poke.id}</li>
          <li>Name {poke.name}</li>
          <li>Attack {poke.attack}</li>
          <li>Defense {poke.defense}</li>
          <li>Type {poke.poke_type}</li>
          <ul>
            {poke.moves.map((move, index) => {
              return <li key={index}>{move}</li>;
              })}
          </ul>
        </ul>

        <ul className="pokeitems">
          <ul>
            {items.map((item, index) => {
              return <li key={index}>
                <Link to={`/pokemon/${poke.id}/item/${item.id}`}>
                  <img width="100px" src={item.image_url}></img>
                </Link>
              </li>;
              })}
          </ul>
          <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
