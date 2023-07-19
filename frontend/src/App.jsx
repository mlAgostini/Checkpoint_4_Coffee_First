import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ButtonProvider } from "../contexts/ButtonContext";
import Home from "./pages/Home/Home";

import "./App.css";
import ListingView from "./pages/ListingView/ListingView";

function App() {
  return (
    <div className="App">
      <ButtonProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listing" element={<ListingView />} />
          </Routes>
        </Router>
      </ButtonProvider>
    </div>
  );
}

export default App;
