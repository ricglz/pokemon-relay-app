import PokemonDetails from './PokemonDetails';
import React from 'react';
import { PokemonList_query } from './__generated__/PokemonList_query.graphql';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

interface Props {
  query: PokemonList_query | null;
}

function PokemonList({ query }: Props) {
  if(!query) {
    return <div>Error</div>;
  }
  const { pokemons } = query;
  if(!pokemons) {
    return <div>Error</div>;
  }
  return (
    <>
      {
        pokemons.map((pokemon) => pokemon ?  (
          <PokemonDetails key={pokemon.id} pokemon={pokemon} />
        ) : null)
      }
    </>
  );
}

export default createFragmentContainer(
  PokemonList,
  {
    query: graphql`
      fragment PokemonList_query on Query {
        pokemons(first: $first) {
          id
          ...PokemonDetails_pokemon
        }
      }
    `
  }
);
