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
  "kind": "Fragment",
  "name": "PokemonDetails_pokemon",
  "type": "Pokemon",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "number",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '899b171bcd0eae3592dbcd2ce333f71b';
export default node;
