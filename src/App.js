import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import ProductsPage from './Pages/ProductsPage';
import SignUpPage from './Pages/SignUpPage';
import LogInPage from './Pages/LogInPage';
import HelpPage from './Pages/HelpPage'
import SponsorsPage from './Pages/SponsorsPage'
import BuildPcPage from './Pages/BuildPcPage'

import NavBar from './Components/NavBar'
import BuildPcMain from './Components/BuildPcMain'
import ServicesMain from './Components/ServicesMain'
import Sponsors from './Components/Sponsors'
import Contact from './Components/Contact'

function App() {
  return (
    <Router>
      <div className='mt-16 flex flex-col justify-center'>

        <NavBar />
        <Routes>
          <Route path="/products" element={<ProductsPage />}/>
          <Route path="/help" element={<HelpPage />}/>
          <Route path="/sponsors" element={<SponsorsPage />}/>
          <Route path="/login" element={<LogInPage />}/>
          <Route path="/signup" element={<SignUpPage />}/>
          <Route path='/buildPc' element={<BuildPcPage />}/>
        </Routes>

        <BuildPcMain />
        <Sponsors />
        <ServicesMain />
        <Contact />
        
      </div>
    </Router>
  );
}

export default App;



