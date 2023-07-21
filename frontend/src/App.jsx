import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Game from "./pages/Game";
import Ranking from "./pages/Ranking";
import UpdateGame from "./pages/UpdateGame";
import NotFound from "./pages/NotFound";

import "./styles.scss";
import { CurrentUserProvider } from "./contexts/CurrentUser";

function App() {
  return (
    <div className="App">
      <CurrentUserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/update-game" element={<UpdateGame />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
