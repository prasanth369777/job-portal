import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Banner from "./components/mainHomepages/banner";
import Home from "./components/mainHomepages/Home";
import Footer from "./components/Pages/Footer";
import Navigation2 from "./components/Pages/Nav2";




import Jobhomepage from "../src/components/Homepagess/Jobseeker/Homepage";


function AppContent() {
  const location = useLocation();

  const hideLayout = ["/login", "/dashboard","/join-network","/"].includes(location.pathname);

  return (
    <>
    
      {!hideLayout && <Banner />}
      {!hideLayout && <Navigation2 />}
      
      <div className="min-h-screen bg-slate-50 selection:bg-blue-600 selection:text-white">
        <Routes>
          <Route path="/" element={<Home />} />


           <Route path="/Job-seeker" element={<Jobhomepage />} />
      
        </Routes>
      </div>

  
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;