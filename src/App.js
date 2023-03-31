import "./App.css";
import { BrowserRouter as HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home-pages/Home";

import { CharacterCards } from "./pages/Characters/CharacterCards";
import { FourHundredFour } from "./pages/404/FourHundredFour";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={<FourHundredFour />} />
          <Route path="/star-wars" element={<Home />} />
          <Route path="/Characters" element={<CharacterCards />} />
          <Route path="/404" element={<FourHundredFour />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
