import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Show from './productos/showProducts';
import Agregar from './productos/addProduct';
import { Update } from './productos/updateProduct';
import Delete from './productos/deleteProduct';

export function Header() {
  return (
    <>
      <header className="encabezado">
        <h1>INICIO</h1>
        <h1>BIENVENIDO AL MENU</h1>
      </header>
      <nav>
        <ul>
          <li><Link to="/addProd">Agregar</Link></li>
        </ul>
        <ul>
          <li><Link to="/showProd">Ver Productos</Link></li>
        </ul>
        <ul>
          <li><Link to="/miPerfil">Mi Perfil</Link></li>
        </ul>
      </nav>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/showProd" element={<><Header /><Show /></>} />
        <Route path="/addProd" element={<><Header /><Agregar /> </>}></Route>
        <Route path="/putProd/:id" element={<><Header /><Update /> </>}></Route>
        <Route path="/deleteProd/:id" element={<><Header /><Delete /> </>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;