import { useState, useEffect } from "react";
import Login from "./Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    () => localStorage.getItem("jwt") !== null
  );

  useEffect(() => {
    localStorage.setItem("logged_user", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const logIn = () => setIsLoggedIn(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setLogin={logIn} />}></Route>
        <Route
          path="/"
          element={isLoggedIn ? <Home setLogin={setIsLoggedIn} /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/*"
          element={isLoggedIn ? <NotFound /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
