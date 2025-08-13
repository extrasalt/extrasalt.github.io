import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";

export function App() {
  return (
    <div>
      <nav className="bg-background text-foreground p-4">
        <div className="container mx-auto flex justify-between">
          <Link to="/" className="text-lg font-bold">My Portfolio</Link>
          <div>
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/resume">Resume</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;