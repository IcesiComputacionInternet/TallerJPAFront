import { useState, useEffect } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    () => localStorage.getItem('jwt') !== null
  );

  useEffect(() => {
    localStorage.setItem("logged_user", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const logIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/login' 
          element={<Login setLogin={logIn} />} 
        />
        <Route 
          path='/' 
          element={isLoggedIn ? <Home /> : <Navigate to='/login' />} 
        />
        <Route 
          path='/*' 
          element={isLoggedIn ? <NotFound /> : <Navigate to='/login' />} 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
