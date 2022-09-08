import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

//context
import { AuthProvider } from './context/AuthContext';

//pages

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
            <div className='container'>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/about' element={<About />} />
              </Routes>
            </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
