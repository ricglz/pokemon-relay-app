/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PokemonDetails_pokemon = {
    readonly id: string;
    readonly name: string | null;
    readonly number: string | null;
    readonly " $refType": "PokemonDetails_pokemon";
};
export type PokemonDetails_pokemon$data = PokemonDetails_pokemon;
export type PokemonDetails_pokemon$key = {
    readonly " $data"?: PokemonDetails_pokemon$data;
    readonly " $fragmentRefs": FragmentRefs<"PokemonDetails_pokemon">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PokemonDetails_pokemon",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "number",
      "storageKey": null
    }
  ],
  "type": "Pokemon"
};
(node as any).hash = '899b171bcd0eae3592dbcd2ce333f71b';
export default node;
