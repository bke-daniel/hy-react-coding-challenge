import { ApolloProvider } from "@apollo/client";
import App from "./App";

export default function Providers() {
  return (
    <ApolloProvider>
      <App />
    </ApolloProvider>
  )

}
