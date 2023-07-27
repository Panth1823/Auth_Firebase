import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Account from './pages/Account';

function App() {
  return (
    <>
      <div>
        <AuthContextProvider >
          
    
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/account" element={<Account />} />

          </Routes>
            </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
