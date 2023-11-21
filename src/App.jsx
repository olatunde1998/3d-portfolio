import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route PATH="/about" element={<About />} />
          <Route PATH="/projects" element={<Projects />} />
          <Route PATH="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
