import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../views/login/login";
import Home from "../views/home/home";
interface Props {
  children: React.ReactComponentElement<any>;
}

const ProtectedRoutes = ({ children }: Props) => {
  if (localStorage.getItem("token") === null) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};
const ThemeRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login></Login>} />

        <Route
          path="/home"
          element={
            <ProtectedRoutes>
              <Home></Home>
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default ThemeRouters;