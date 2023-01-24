import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const link = new HttpLink({
  credentials: "include",
  uri: "https://api.instantwebtools.net/graphql",
});

const gqlClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
export default gqlClient;
