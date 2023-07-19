import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Game from "./pages/Game";
import Summary from "./pages/Summary";
import UpdateGame from "./pages/UpdateGame";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/update-game" element={<UpdateGame />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
