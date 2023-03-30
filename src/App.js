import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home-pages/Home";

import { CharacterCards } from "./pages/Characters/CharacterCards";
import { FourHundredFour } from "./pages/404/FourHundredFour";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="*" element={<FourHundredFour />} />
          <Route path="/" element={<Home />} />
          <Route path="/Characters" element={<CharacterCards />} />
          <Route path="/404" element={<FourHundredFour />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
