import { useState, useEffect } from "react";
import Login from "./components/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    () => localStorage.getItem("jwt") !== null
  );

  useEffect(() => {
    localStorage.setItem("logged_user", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const logIn = () => setIsLoggedIn(true);

  const logOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setLogin={logIn} />}></Route>
        <Route
          path="/"
          element={isLoggedIn ? 
            (<>
                <Home /> 
                <button type="button" className="btn btn-primary" onClick={logOut}>
                    Log out
                </button>
            </>)
            : (<Navigate to="/login" />)}
        >
        </Route>
        <Route
          path="/*"
          element={isLoggedIn ? <NotFound /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
