```javascript
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/About";
import Projects from "./Routes/Projects";
import Contact from "./Routes/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
```