import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Earn from './components/earnings/Earn';
import Contacts from './components/contacts/Contacts';
import Reports from './components/contacts/Reports';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<About />} />
        <Route path='/earn' element={<Earn />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/contact/report' element={<Reports />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
