import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';

import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

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
const [user, setUser] = useState(undefined)
const {auth} = useAuthentication

const loadingUser = user === undefined



  useEffect(() => {

    onAuthStateChanged(auth,(user)=>{
      setUser(user)
    })

  },[auth])

  if (loadingUser) {
    return <p>Carregando um belo Bacon...</p>
  }

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
