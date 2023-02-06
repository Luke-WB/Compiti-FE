import React from "react";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <main id="piePagina">
      <h1>REACT</h1>
      <ButtonComponent colore="black" sfondo="white" />
      <ImageComponent
        link="https://www.donnad.it/sites/default/files/styles/r_visual_d/public/201448/shutterstock_131430779.jpg?itok=OfDLo9PD"
        alt="Mare"
      />
    </main>
  );
}

export default App;
