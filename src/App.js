import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import BuildPcMain from './Components/BuildPcMain';
import NavBar from './Components/NavBar';
import ServicesMain from './Components/ServicesMain';
import Sponsors from './Components/Sponsors';
import Contact from './Components/Contact';
import ProductsPage from './ProductsPage';
import Product from './Components/Product';
import SignUpPage from './SignUpPage';
import LogInPage from './LogInPage';
import HelpPage from './HelpPage'
import SponsorsPage from './SponsorsPage'
import ProductCategory from './Components/ProductCategory'

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-center '>
        <NavBar />
        <div className='mt-16 flex flex-col'>

          <Routes>
            <Route path="/mainmenu" element={<App />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/sponsors" element={<SponsorsPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>

          <BuildPcMain />

          <Sponsors />

          <ServicesMain />
          
          <Contact />
          
          <Link to='/products'>Ver Productos</Link>
          <Routes>
            <Route path='/products' element={<ProductsPage />} />
          </Routes>
          
          <Product nombre='Placa de video ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' precio='1.800.000'/>

        </div>

        <SignUpPage />

        <LogInPage />
        
        <ProductCategory title='Procesadores'>
          <p>- AMD</p>
          <p>- Nvidia</p>
        </ProductCategory>
      </div>
      
    </Router>
  );
}

export default App;
