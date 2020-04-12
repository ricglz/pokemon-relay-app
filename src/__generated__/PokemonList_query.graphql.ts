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
  "kind": "Fragment",
  "name": "PokemonList_query",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "first",
      "type": "Int!"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "pokemons",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "first"
        }
      ],
      "concreteType": "Pokemon",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "PokemonDetails_pokemon",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = '8b67ff9374974152b782c4bd4c302bdb';
export default node;
