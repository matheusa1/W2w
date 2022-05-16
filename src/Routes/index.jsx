import { Route, Routes } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import FilmeDetails from "../pages/FilmesDetails";
import Sobre from '../pages/Sobre'
import SearchPage from "../pages/Busca";
import CategoryPage from "../pages/Category";
import EditProfile from "../pages/EditProfile";
import PerfilPage from "../pages/Perfil";
import SearchPage2 from "../pages/Search"

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Cadastro />} />
    <Route path="/filme/:id" element={<FilmeDetails />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/category" element={<CategoryPage />} />
    <Route path="/profile" element={<PerfilPage />} />
    <Route path="/profile/edit" element={<EditProfile />} />
    <Route path="/about" element={<Sobre />}/>
    <Route path="/search2" element={<SearchPage2/>} />
  </Routes>
);

export default AppRoutes;
