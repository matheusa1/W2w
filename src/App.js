import { NavLink, Route, Routes } from "react-router-dom";
import Cadastro from './pages/Cadastro'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import FilmeDetails from './pages/FilmesDetails'
function App() {
  return (
    <>
          <NavLink to="/">home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">cadastro</NavLink>
          <NavLink to="/filme/01">filme 01</NavLink>
          <NavLink to="/filme/02">filme 02</NavLink>
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Cadastro />} />
        <Route path="/filme/:id" element={<FilmeDetails />} />
    </Routes>
    </>
  );
}

export default App;
