import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route (often the root route) */}
        <Route path="/" element={<HomePage className=" overflow-hidden" />} />
      </Routes>
    </Router>
  );
}

export default App;
