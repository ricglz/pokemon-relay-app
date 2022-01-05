/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PokemonList_query = {
    readonly pokemons: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"PokemonDetails_pokemon">;
    } | null> | null;
    readonly " $refType": "PokemonList_query";
};
export type PokemonList_query$data = PokemonList_query;
export type PokemonList_query$key = {
    readonly " $data"?: PokemonList_query$data;
    readonly " $fragmentRefs": FragmentRefs<"PokemonList_query">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "first",
      "type": "Int!"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "PokemonList_query",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "first"
        }
      ],
      "concreteType": "Pokemon",
      "kind": "LinkedField",
      "name": "pokemons",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PokemonDetails_pokemon"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query"
};
(node as any).hash = '8b67ff9374974152b782c4bd4c302bdb';
export default node;
