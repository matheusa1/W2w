import {Routes, Route } from "react-router-dom";

import Cadastro from "../pages/Cadastro";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import FilmeDetails from "../pages/FilmesDetails";
import Sobre from '../pages/Sobre'
import SearchPage from "../pages/Search";
import EditProfile from "../pages/EditProfile";
import PerfilPage from "../pages/Perfil";
import PlatformPage from "../pages/Platform";
import PrivateRoute from "./PrivateRoute";
import AuthRoute from "./AuthRoutes";


const AppRoutes = () => {
  
  return (
    <Routes>
      <Route path='/profile' element={<PrivateRoute/>}>
        <Route path="/profile" element={<PerfilPage />} />
      </Route>

      <Route path='/profile/edit' element={<PrivateRoute/>}>
        <Route path="/profile/edit" element={<EditProfile />} />
      </Route>

      <Route path='/' element={<PrivateRoute/>}>
        <Route path="/" element={<Dashboard />} />
      </Route>

      <Route path='/filme/:id' element={<PrivateRoute/>}>
        <Route path="/filme/:id" element={<FilmeDetails />} />
      </Route>

      <Route path='/search' element={<PrivateRoute/>}>
        <Route path="/search" element={<SearchPage />} />
      </Route>

      <Route path='/about' element={<PrivateRoute/>}>
        <Route path="/about" element={<Sobre />}/>
      </Route>

      <Route path='/platform/:id' element={<PrivateRoute/>}>
        <Route path="/platform/:id" element={<PlatformPage />} />
      </Route>

      <Route path='/login' element={<AuthRoute/>}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path='/register' element={<AuthRoute/>}>
        <Route path="/register" element={<Cadastro />} />
      </Route>

    </Routes>
)};

export default AppRoutes;