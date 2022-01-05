/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppQueryVariables = {
    first: number;
};
export type AppQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"PokemonList_query">;
};
export type AppQuery = {
    readonly response: AppQueryResponse;
    readonly variables: AppQueryVariables;
};



/*
query AppQuery(
  $first: Int!
) {
  ...PokemonList_query
}

fragment PokemonDetails_pokemon on Pokemon {
  id
  name
  number
}

fragment PokemonList_query on Query {
  pokemons(first: $first) {
    id
    ...PokemonDetails_pokemon
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int!"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "PokemonList_query"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppQuery",
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $first: Int!\n) {\n  ...PokemonList_query\n}\n\nfragment PokemonDetails_pokemon on Pokemon {\n  id\n  name\n  number\n}\n\nfragment PokemonList_query on Query {\n  pokemons(first: $first) {\n    id\n    ...PokemonDetails_pokemon\n  }\n}\n"
  }
};
})();
(node as any).hash = '961d28a731c5d2c716a052550685979f';
export default node;
