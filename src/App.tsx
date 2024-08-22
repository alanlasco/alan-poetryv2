import { Footer } from "./components/Footer";
import "./stylesheets/app.css";
import Navbar from "./components/Navbar";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
