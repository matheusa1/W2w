import { Route, Routes } from "react-router-dom";
import Cadastro from '../pages/Cadastro'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import FilmeDetails from '../pages/FilmesDetails'

const AppRoutes = ()=>(
  <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Cadastro />} />
      <Route path="/filme/:id" element={<FilmeDetails />} />
  </Routes>
)

export default AppRoutes;