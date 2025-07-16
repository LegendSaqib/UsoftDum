// App.js
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Navbar from "./Components/Navbar";
import FAQ from "./Pages/FAQ.jsx";
import Footer from "./Components/Footer.jsx";
import NotFound from "./Pages/NotFound.jsx";
import ApplyService from "./Pages/ApplyForITServices.jsx";

function MainContent() {
  const location = useLocation();
  const isNotFoundRoute = 
    location.pathname === '/InternShips' || 
    location.pathname === '/elements' || 
    location.pathname === '/faq' || 
    location.pathname === '/blog1' || 
    location.pathname === '/blog2' || 
    location.pathname === '*';

  return (
    <>
      {!isNotFoundRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ApplyService" element={<ApplyService />} />
        <Route path="/elements" element={<NotFound />} /> {/* Triggers 404 */}
        <Route path="/faq" element={<NotFound />} /> {/* Triggers 404 */}
        <Route path="/blog1" element={<NotFound />} /> {/* Triggers 404 */}
        <Route path="/blog2" element={<NotFound />} /> {/* Triggers 404 */}
        <Route path="/contact" element={<Contact />} />

        {/* 404 Route */}
        <Route path="/InternShips" element={<NotFound />} /> {/* Triggers 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isNotFoundRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;
