import "./styles/app.scss";

import React from "react";
import Assessment from "./components/Assessment/Assessment";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Assessment />
    </div>
  );
}

export default App;
