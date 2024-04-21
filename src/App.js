import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import BuildPcMain from './Components/BuildPcMain';
import NavBar from './Components/NavBar';
import ServicesMain from './Components/ServicesMain';
import Sponsors from './Components/Sponsors';
import Contact from './Components/Contact';
import ProductsPage from './ProductsPage';

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-center '>
        <NavBar />
        <div className='mt-16 flex flex-col'>

          <BuildPcMain />

          <Sponsors />

          <ServicesMain />
          
          <Contact />
          
          <Link to="/products">Ver Productos</Link>
          <Routes>
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
          

        </div>

      </div>
      
    </Router>
  );
}

export default App;
