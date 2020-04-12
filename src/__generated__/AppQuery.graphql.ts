/* tslint:disable */
/* eslint-disable */
/* @relayHash 9992c9fe0d8e959bfe8893965dcf73a1 */

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
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int!",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "PokemonList_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": (v0/*: any*/),
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
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery(\n  $first: Int!\n) {\n  ...PokemonList_query\n}\n\nfragment PokemonDetails_pokemon on Pokemon {\n  id\n  name\n  number\n}\n\nfragment PokemonList_query on Query {\n  pokemons(first: $first) {\n    id\n    ...PokemonDetails_pokemon\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '961d28a731c5d2c716a052550685979f';
export default node;
