import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import LoginPage from "./Components/LoginPage";
import JournalDashboard from "./Components/JournalDashboard";
import RegistrationPage from "./Components/RegistrationPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <LandingPage />
      {/* <RegistrationPage /> */}
    </div>
  );
}

export default App;
