import { Route, Routes } from "react-router-dom";
import Cadastro from '../pages/Cadastro'
import Sobre from '../pages/Sobre'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import FilmeDetails from '../pages/FilmesDetails'
import SearchPage from "../pages/Busca";

const AppRoutes = ()=>(
  <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Cadastro />} />
      <Route path="/filme/:id" element={<FilmeDetails />} />
      <Route path="/search" element={<SearchPage />}/>
      <Route path="/about" element={<Sobre />}/>
  </Routes>
)

export default AppRoutes;