import PokemonList from './PokemonList';
import React from 'react';
import environment from './relay-env';
import { graphql, QueryRenderer } from 'react-relay';

const query = graphql`
  query AppQuery($first: Int!){
    ...PokemonList_query
  }
`
interface Props {
  error: Error | null;
  props: any;
}

const renderComponent = ({ error, props }: Props) => {
  if(error) {
    return <div>Error!</div>;
  }
  if(!props) {
    return <div>Loading..</div>;
  }
  return <PokemonList query={props} />;
};

function App() {
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      render={renderComponent}
      variables={{ first: 10 }}
    />
  );
}

export default App;
