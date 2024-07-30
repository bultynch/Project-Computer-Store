import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import SignUpPage from './Pages/SignUpPage';
import LogInPage from './Pages/LogInPage';
import HelpPage from './Pages/HelpPage'
import SponsorsPage from './Pages/SponsorsPage'
import ProductIndividualPage from './Pages/ProductIndividualPage';
import CartPage from './Pages/CartPage'
import BuildPcPage from './Pages/BuildPC/BuildPcPage'
import BuildPcPageProcessor1 from './Pages/BuildPC/BuildPcPageProcessor1';
import BuildPcPageProcessor2 from './Pages/BuildPC/BuildPcPageProcessor2';
import BuildPcPageMother1 from './Pages/BuildPC/BuildPcPageMother1';
import BuildPcPageMother2 from './Pages/BuildPC/BuildPcPageMother2';
import BuildPcPageRam from './Pages/BuildPC/BuildPcPageRam';
import BuildPcPageHDD from './Pages/BuildPC/BuildPcPageHDD';
import BuildPcPageSSD from './Pages/BuildPC/BuildPcPageSSD';
import BuildPcPageGraphicCard from './Pages/BuildPC/BuildPcPageGraphicCard';
import BuildPcPageFont from './Pages/BuildPC/BuildPcPageFont';
import BuildPcPageCase from './Pages/BuildPC/BuildPcPageCase';
import BuildPcPageAccessories from './Pages/BuildPC/BuildPcPageAccessories';
import UserProfilePage from './Pages/UserProfilePage';

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
        <Route path='/carrito' element={<CartPage />} />
        <Route path='/buildPc' element={<BuildPcPage />} />
        <Route path='/processor1' element={<BuildPcPageProcessor1 />} />
        <Route path='/processor2' element={<BuildPcPageProcessor2 />} />
        <Route path='/mother1' element={<BuildPcPageMother1 />} />
        <Route path='/mother2' element={<BuildPcPageMother2 />} />
        <Route path='/ram' element={<BuildPcPageRam />} />
        <Route path='/hdd' element={<BuildPcPageHDD />} />
        <Route path='/ssd' element={<BuildPcPageSSD />} />
        <Route path='/graphic' element={<BuildPcPageGraphicCard />} />
        <Route path='/font' element={<BuildPcPageFont />} />
        <Route path='/case' element={<BuildPcPageCase />} />
        <Route path='/accessories' element={<BuildPcPageAccessories />} />
        <Route path='/userProfile' element={<UserProfilePage />} />
        

      </Routes>
    </Router>
  );
}

export default App;
