import Navbar from './Navbar';
import Talks from './components/pages/talks';
import Home from './components/pages/Home';
import About from './components/pages/about';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/talks'
            element={<Talks />}
          />
          <Route
            path='/about'
            element={<About />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
