import React from 'react';
import { PokemonDetails_pokemon } from './__generated__/PokemonDetails_pokemon.graphql';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

interface Props {
  pokemon: PokemonDetails_pokemon | null;
}

function PokemonDetails({ pokemon }: Props) {
  if(!pokemon) {
    return <div></div>
  }
  const { id, number, name } = pokemon;
  return (
    <div key={id}>{`${number} - ${name}`}</div>
  );
}

export default createFragmentContainer(
  PokemonDetails,
  {
    pokemon: graphql`
      fragment PokemonDetails_pokemon on Pokemon {
        id
        name
        number
      }
    `
  }
);
