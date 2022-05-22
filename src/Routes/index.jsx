import { Route, Routes } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import FilmeDetails from "../pages/FilmesDetails";
import Sobre from '../pages/Sobre'
import SearchPage from "../pages/Search";
import EditProfile from "../pages/EditProfile";
import PerfilPage from "../pages/Perfil";
import PlatformPage from "../pages/Platform";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Cadastro />} />
    <Route path="/filme/:id" element={<FilmeDetails />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/profile" element={<PerfilPage />} />
    <Route path="/profile/edit" element={<EditProfile />} />
    <Route path="/about" element={<Sobre />}/>
    <Route path="/platform/:id" element={<PlatformPage />} />
  </Routes>
);

export default AppRoutes;
