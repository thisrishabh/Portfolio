
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';

import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
       <Routes>
      <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/resume' element={<Resume />}></Route>
        <Route exact path='/portfolio' element={<Portfolio />}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
