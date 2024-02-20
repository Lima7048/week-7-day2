// import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
// import About from "./components/About";
import NotFound from "./components/NotFound.jsx";
import PlantGallery from "./components/PlantGallery.jsx";
import Plant from "./components/Plant.jsx";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome To My Website</h1>
      <nav>
        <h2>The magical Properties of Plants</h2>
        <Link to="/">Home</Link>
        <Link to="/plants">Plant</Link>
      </nav>
      <Routes>
        <Route path="/plants" element={<PlantGallery />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
