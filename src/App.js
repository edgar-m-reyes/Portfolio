import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route
            path='/'
            element={<Profile userName='majinE'/>}>
          </Route>
          <Route
            path='/projects'
            element={<Projects userName='majinE'/>}>
          </Route>
          <Route
            path='/projects/:projectName'
            element={<ProjectDetail userName='majinE'/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
