import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import React from 'react'
import {Home} from './pages/Home'
import {Login} from "./pages/Login";
import { Register } from './pages/Register';
import { Detalles } from './pages/Detalles';
import { Carrito } from './pages/Carrito';
import { Administrar } from './pages/Administrar';
import { Monitorear } from './pages/Monitorear';
 export const App = () => {
  return (

    <Router>
      
      
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  exact path="/Login" element={<Login />} />
      <Route  exact path="/Register" element={<Register/>} />
      <Route  exact path="/Detalles" element={<Detalles/>} />
      <Route  exact path="/Carrito" element={<Carrito/>} />
      <Route  exact path="/Administrar" element={<Administrar/>} />
      <Route  exact path="/Monitorear" element={<Monitorear/>} />

    </Routes>
    </Router>
    
      
   
       
    
  );
};

export default App;
