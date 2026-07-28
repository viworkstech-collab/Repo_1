import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<Blog />} />
  <Route path="/portfolio" element={<Portfolio />} />
</Routes>
    </Router>
  );
}

export default App;