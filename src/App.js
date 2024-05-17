import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import SignUpPage from './Pages/SignUpPage';
import LogInPage from './Pages/LogInPage';
import HelpPage from './Pages/HelpPage'
import SponsorsPage from './Pages/SponsorsPage'
import BuildPcPage from './Pages/BuildPcPage'

function App() {
  return (
    <Router>

      
      <Routes>
        <Route path="/main" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path='/buildPc' element={<BuildPcPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
