import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './pages/home/home';
import AppLayout from './components/layout/appLayout';
import Experiance from './pages/experiance/experiance';
import Project from './pages/project/project';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="Jobexperiance" element={<Experiance />} />
              <Route path="project" element={<Project />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
