import "./App.css";
import Grade from "./Grade.js";
import { Route, Routes } from "react-router-dom";
import List from "./List.js";
import Home from "./Home.js";

function App() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <span className="fs-4">Spelling Beeline</span>
        </a>
        <span className="navbar-text">Eric</span>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grade" element={<Grade />} />
        <Route path="/grade:gradeName/list" element={<List />} />
        <Route path="/grade/:gradeName/list/:listName" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
