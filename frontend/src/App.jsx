import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import "./App.css";
import ListingView from "./pages/ListingView/ListingView";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<ListingView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
