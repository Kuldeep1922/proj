import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from './pages/Homepage.jsx';
import Tapbar from './components/Tapbar.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

