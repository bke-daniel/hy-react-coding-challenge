import "./App.css";
import Content from "./components/Content";

function App() {
  return (
    <>
      <a href="https://hotelery.de/" target="_blank" className="logo-container">
        <img
          src={
            "https://hotelery.de/wp-content/uploads/2022/11/GG_hotelery_Logo_secondary_positive_RGB.svg"
          }
          alt="hotelery"
        />
      </a>

      <h1>hotelery React, Vite, GQL, TS coding challenge</h1>
      <Content />
    </>
  );
}

export default App;
