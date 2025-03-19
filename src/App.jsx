import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header /> 
      <div className="pt-16"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
      <Footer /> 
    </Router>
  );
}

export default App;
