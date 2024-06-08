import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import SignUpPage from './Pages/SignUpPage';
import LogInPage from './Pages/LogInPage';
import HelpPage from './Pages/HelpPage'
import SponsorsPage from './Pages/SponsorsPage'
import BuildPcPage from './Pages/BuildPcPage'
import ProductIndividualPage from './Pages/ProductIndividualPage';
import CartPage from './Pages/CartPage'
import BuildPcPageProcessor2 from './Pages/BuildPcPageProcessor2';
import BuildPcPageProcessor21 from './Pages/BuildPcPageProcessor21';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path='/ProductIndividualPage' element={<ProductIndividualPage />} />
        <Route path='/carrito' element={<CartPage />}/>
        <Route path='/buildPc' element={<BuildPcPage />}/>
        <Route path='/processor2' element={<BuildPcPageProcessor2 />}/>
        <Route path='/processor21' element={<BuildPcPageProcessor21 />}/>
      </Routes>
    </Router>
  );
}

export default App;
