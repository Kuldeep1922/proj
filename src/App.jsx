import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from './pages/Homepage.jsx';
import Blog from './pages/Blog.jsx';
import About from './pages/About.jsx';
import Team from './pages/Team.jsx';
import Projects from './pages/Projects.jsx';
import Testimonial from './pages/Testimonial.jsx';
import Service from './pages/Services.jsx';
import Contactpage from './pages/Contactpage.jsx';
import Notfound from './pages/Notfound.jsx';
import CareerPage from './pages/CareerPage.jsx';
import Appp from './pages/Appp.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/404" element={<Notfound />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/app" element={<Appp />} />
          {/* <Route path="/news" element={<NewsLetter />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

