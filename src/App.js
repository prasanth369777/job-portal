import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Banner from "./components/Pages/banner";
import Home from "./components/Homepages/Home";
import Footer from "./components/Pages/Footer";
import Navigation2 from "./components/Pages/Nav2";
import Loginpage from "./components/Homepages/loginpage";
import Dashboard from "./components/Pages/dashboard";
import JoinNetwork from "./components/Pages/JoinNetwork";
import Explore from "./components/Pages/explorejobs";

// Create a helper component to handle conditional rendering
function AppContent() {
  const location = useLocation();
  
  // Define paths where the Nav/Footer/Banner should be HIDDEN
  // We use .includes() to check for multiple pages
  const hideLayout = ["/login", "/dashboard","/join-network","/"].includes(location.pathname);

  return (
    <>
      {/* Hides Banner and Nav for both Login and Dashboard */}
      {!hideLayout && <Banner />}
      {!hideLayout && <Navigation2 />}
      
      <div className="min-h-screen bg-slate-50 selection:bg-blue-600 selection:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<Explore />} />
     
<Route path="/join-network" element={<JoinNetwork />} />
        </Routes>
      </div>

      {/* Hides Footer for both Login and Dashboard */}
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