import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Show() {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    obtenerProductos();
  }, []);

  async function obtenerProductos() {
    try {
      const rutaApi = 'http://127.0.0.1:8000/api/prods';
      const respuesta = await axios.get(rutaApi);
      setProductos(respuesta.data);
      console.log(respuesta.data);
    } catch (error) {
      console.error('Error al obtener el producto', error);
    }
  }
  const navigateUpdate = (id) => {
    navigate(`putProd/${id}`);
  };

  return (
    <table className="tabla">
      <thead>
        <tr>
          <th>id</th>
          <th>nombre</th>
          <th>descripcion</th>
          <th>precio</th>
          <th>cantidad</th>
          <th>editar</th>
          <th>estado</th>
          <th>eliminar</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.nameProduct}</td>
            <td>{producto.description}</td>
            <td>{producto.quantity}</td>
            <td>{producto.price}</td>
            <td>{producto.state === 0 ? 'denegado' : producto.state === 1 ? 'aceptado' : 'estado desconocido'}</td>
            <td>
              <Link to={`/deleteProd/${producto.id}`}>
              <button name="eliminar" id="eliminar">
                eliminar
              </button>
              </Link>
            </td>
            <td>
              <Link to={`/putProd/${producto.id}`}>
              <button name="actualizar" id="actualizar">
                actualizar
              </button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
