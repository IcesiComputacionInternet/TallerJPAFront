import './App.css'
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./routes/Router.tsx";

function App() {
  return (
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
  )
}

export default App
