import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import { Home } from './pages/Home'
import { Login } from "./pages/Login";
import { Register } from './pages/Register';
import { Detalles } from './pages/Detalles';
import { Carrito } from './pages/Carrito';
import { Administrar } from './pages/Administrar';
import { Monitorear } from './pages/Monitorear';
import { Busqueda } from './pages/Busqueda';
import { Mantenimiento } from './pages/Mantenimiento';
import { Pedidos } from './pages/Pedidos';

export const App = () => {
  return (

    <Router>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Detalles/:id" element={<Detalles />} />
        <Route path="/Carrito" element={<Carrito />} />
        <Route path="/Administrar" element={<Administrar />} />
        <Route path="/Monitorear" element={<Monitorear />} />
        <Route path="/Busqueda" element={<Busqueda />} />
        <Route path="/Mantenimiento" element={<Mantenimiento />} />
        <Route path="/Pedidos" element={<Pedidos />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />

      </Routes>
    </Router>





  );
};

export default App;
