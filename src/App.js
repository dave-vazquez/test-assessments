import "./app.scss";

import React from "react";
import Assessment from "./components/Assessment/Assessment";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Assessment />
    </div>
  );
}

export default App;
