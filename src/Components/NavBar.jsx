import { Route, Link, Routes } from 'react-router-dom';
import App from '../App'
import ProductsPage from '../ProductsPage';
import HelpPage from '../HelpPage'
import SponsorsPage from '../SponsorsPage'
import SignUpPage from '../SignUpPage';
import LogInPage from '../LogInPage'

function NavigationBar() {
  return (
    <div className='px-40 py-4 flex items-center justify-between bg-white w-full h-16 fixed top-0 shadow-lg z-10'>

      <div className='flex-1 flex items-center justify-start'>
        <Link to='mainmenu' className='font-orbitron text-xl text-gray-700'><strong>PC STORE</strong></Link>
      </div>

      <div className='flex-1 flex items-center justify-end'>

        <Link to="/products" className='bg-blue-200'>Productos</Link>
        <Link to="/help" className='bg-red-400'>Ayuda</Link>
        <Link to="/sponsors" className='bg-yellow-300'>Sponsors</Link>
        <Link to="/login" className='mr-1 bg-white hover:bg-gray-200 border text-black py-1 px-2 rounded'>LogIn</Link>
        <Link to="/signup" className='mx-1 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded'>SignUp</Link>

        <Routes>
          <Route path="/mainmenu" element={<App />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>

      </div>

    </div>
  );
};

export default NavigationBar;
