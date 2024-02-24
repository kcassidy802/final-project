// Using an online API of your choice, create a React project. You will be working on this for the next three weeks.
// Project must meet the following criteria:
// Use React Router and have at least 3 pages using React Bootstrap or an alternative styling library
// Contain at least 10 components
// Allow for all CRUD operations



import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // We see our react-router-dom as required
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import Home from "./components/Home";
import PageThree from "./components/PageThree";

function App() {  //app function and our Routes to be able to go to each page
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1996-Stanley-Cup" element={<PageOne />} />
          <Route path="/2001-Stanley-Cup" element={<PageTwo />} />
          <Route path="/2022-Stanley-Cup" element={<PageThree />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
