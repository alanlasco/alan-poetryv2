import "./stylesheets/app.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Poemario } from "./screens/Poemario";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/poemario" element={<Poemario />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
