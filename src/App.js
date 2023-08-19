import './App.css';
import React from 'react';
import Header from './Components/Header';
import Newsfile from './Components/Newsfile';
import {
  BrowserRouter as Router, // Import BrowserRouter with an alias
  Routes,
  Route,
} from "react-router-dom";
import About from './Components/About';

const App = () => {
  const pageSize = 20;
  const apiKey = "a8258994d9194d58a134977e488421a5"; // Wrap the API key in quotes

  return (
    <div>
      <Router>
        <div>
          <Header title="Crow Daily" />
          <Routes>
            <Route path="/" element={<Newsfile apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
            <Route path="/entertainment" element={<Newsfile apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
            <Route path="/health" element={<Newsfile apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
            <Route path="/sports" element={<Newsfile apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
            <Route path="/science" element={<Newsfile apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
            <Route path="/technology" element={<Newsfile apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
            <Route path="/business" element={<Newsfile apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
            <Route path="/about" element={<About apiKey={apiKey} key="about" pageSize={pageSize} country="in" category="general" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
