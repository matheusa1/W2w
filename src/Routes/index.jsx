import { Route, Routes } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import FilmeDetails from "../pages/FilmesDetails";
import SearchPage from "../pages/Busca";
import CategoryPage from "../pages/Category";
import ProfilePage from "../pages/Profile";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Cadastro />} />
    <Route path="/filme/:id" element={<FilmeDetails />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/category" element={<CategoryPage />} />
    <Route path="/profile" element={<ProfilePage />} />
  </Routes>
);

export default AppRoutes;
