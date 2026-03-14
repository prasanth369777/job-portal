import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Homepages/Home";
import Footer from "./components/Pages/Footer";
import Navigation from "./components/Pages/Navigation";
import Banner from "./components/Pages/banner";

function App() {
  return (
    <Router>
      <Banner />
      <Navigation />
      <div className="min-h-screen bg-slate-50 selection:bg-blue-600 selection:text-white">
       
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
       <Footer />
    </Router>
    
  );
}

export default App;