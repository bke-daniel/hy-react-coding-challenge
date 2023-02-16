import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const link = new HttpLink({
  uri: "https://spacex-production.up.railway.app",
});

const gqlClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
export default gqlClient;
