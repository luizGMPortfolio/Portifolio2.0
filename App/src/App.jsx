import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimateRoutes from "./components/AnimateRoutes.jsx";

import Menu from "./components/Menu.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <AnimateRoutes />
      </Router>
    </div>
  );
}

export default App;
