import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Delete() {
  const [product, setProduct] = useState([]); 
  const navigate = useNavigate();

  const { id } = useParams();
  const link = `http://127.0.0.1:8000/api/prods/${id}`;

  const getProduct = async () => {
    try {
      const { data } = await axios.get(link);
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.error('Error al obtener el producto', error);
    }
  };

  const deleteProduct = async () => {
    try {
      await axios.delete(link);
    } catch (error) {
      console.error("Error al eliminar", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []); // Cambiado a un arreglo vacío para que se ejecute solo una vez al montar el componente

  return (
    <>
      <div>
        <h1>¿Está seguro de eliminar el producto?</h1>
        <button
          onClick={async () => {
            await deleteProduct();
            setProduct((prev) => {
              const updatedProduct = prev.filter((a) => a.id !== id);
              if (updatedProduct.length < prev.length) {
                alert("Producto eliminado exitosamente");
                navigate("/showProd");
              }
              return updatedProduct;
            });
          }}
        >
          Aceptar
        </button>
        <Link to="/showProd">
          <button>Cancelar</button>
        </Link>
      </div>
    </>
  );
}
