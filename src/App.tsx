import { ApolloProvider } from "@apollo/client";
import "./App.css";
import Content from "./components/Content";
import gqlClient from "./gql-client";

function App() {
  return (
    <ApolloProvider client={gqlClient}>
      <a href="https://hotelery.de" target="_blank" className="logo-container">
        <img
          src={
            "https://hotelery.de/wp-content/uploads/2022/11/GG_hotelery_Logo_secondary_positive_RGB.svg"
          }
          alt="hotelery"
        />
      </a>

      <h1>hotelery React, Vite, GQL, TS coding challenge</h1>
      <Content />
    </ApolloProvider>
  );
}

export default App;
