import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import Home from "./components/Home";
import PageThree from "./components/PageThree";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1996-Stanley-Cup" element={<PageOne />} />
          <Route path="/2001-Stanley-Cup" element={<PageTwo />} />
          <Route path="/2021-Stanley-Cup" element={<PageThree />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
