import { Route, Routes } from 'react-router';
import './App.css';
import LandingPage from './pages/landingPage/LandingPage';
import SinglePage from './pages/singlePage/SinglePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/restuarant/:id' element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
