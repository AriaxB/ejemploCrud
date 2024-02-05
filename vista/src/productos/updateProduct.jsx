import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function Update() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        nameProduct: "",
        description: "",
        quantity: 0,
        price: 0,
        state: false
    });
    const { id } = useParams();
    const link = `http://127.0.0.1:8000/api/prods/${id}`;
    
    const getProduct = async () => {
        try {
            const { data } = await axios.get(link);
            setProduct(data);
            console.log(data)
        } catch (error) {
            console.error('Error al obtener el producto', error);
        }
    };

    const putProduct = async () => {
        try {
            await axios.put(link, product);
            alert("datos actualizados")
            navigate("/");
        } catch (error) {
            console.error('Error al modificar el producto', error);
        }
    };

    useEffect(() => {
        getProduct();
    }, [id]);

    function cambiaData({ target: { name, value } }) {
        setProduct({ ...product, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        putProduct();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="campo">
                <label htmlFor="nameProduct">nombre producto</label>
                <input
                    value={product.nameProduct}
                    name="nameProduct"
                    id="nameProduct"
                    type="text"
                    required
                    onChange={cambiaData}
                />
            </div>
            <div className="campo">
                <label htmlFor="description">descripcion</label>
                <textarea
                    value={product.description}
                    name="description"
                    id="description"
                    type="text"
                    required
                    onChange={cambiaData}
                ></textarea>
            </div>
            <div className="campo">
                <label htmlFor="quantity">cantidad</label>
                <input
                    value={product.quantity}
                    name="quantity"
                    id="quantity"
                    type="number"
                    required
                    onChange={cambiaData}
                />
            </div>
            <div className="campo">
                <label htmlFor="price">precio</label>
                <input
                    value={product.price}
                    name="price"
                    id="price"
                    type="number"
                    required
                    onChange={cambiaData}
                />
            </div>

            <div>
                <button type="submit">enviar</button>
            </div>
        </form>
    );
}