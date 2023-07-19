import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ButtonProvider } from "../contexts/ButtonContext";
import Home from "./pages/Home/Home";
import "./app.scss";
import ListingView from "./pages/ListingView/ListingView";

function App() {
  return (
    <ButtonProvider>
      <Router>
        <div className="app-page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listing" element={<ListingView />} />
          </Routes>
        </div>
      </Router>
    </ButtonProvider>
  );
}

export default App;
