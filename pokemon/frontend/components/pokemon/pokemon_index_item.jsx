import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = (props) => {
  return (
    <li>
      <Link to={`/pokemon/${props.pokemon.id}`}>
        {props.pokemon.name}
        <img width="50px" src={props.pokemon.image_url}></img>
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
