import React from "react";
import Navigation from "./components/Navigation";
import ReportModal from "./components/ReportModal";
import AppContainer from "./styles/AppContainer";

function App() {
  return (
    <AppContainer>
      <Navigation />
      <ReportModal />
    </AppContainer>
  );
}

export default App;
