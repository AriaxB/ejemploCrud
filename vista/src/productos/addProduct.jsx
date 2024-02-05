import React from "react";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


export default function Agregar(){
    const navigate=useNavigate()
    const link='http://127.0.0.1:8000/api/prods'
    const postproduct=(data)=>axios.post(link, data)
    const [product, setProduct]=useState({
        nameproduct:"",
        description:"",
        quantity:0,
        price:0,
        state:false
    })
    function cambiaData({ target: { name, value } }) {
        setProduct({ ...product, [name]: value });
    }
    async function Add(e){
        e.preventDefault();
        try{
            e.preventDefault();
            await postproduct(product)
            alert("producto agregado con exito")
            navigate("/")
        }catch (error) {
            if (error.response) {
                console.error("Error de respuesta del servidor:", error.response.status, error.response.data);
            } else if (error.request) {
                console.error("No se recibió respuesta del servidor:", error.request);
            } else {
                console.error("Error al enviar la solicitud:", error.message);
            }
        }
    }

    return(
        <form action="" onSubmit={(e)=>Add(e)}>
            <div className="campo">
            <label htmlFor="nameProduct">nombre producto</label>
            <input name="nameProduct" id="nameProduct" type="text" required onChange={(e)=>cambiaData(e)} />
            </div>
            <div className="campo">
            <label htmlFor="description">descripcion</label>
            <textarea name="description" id="description" type="text" required onChange={(e)=>cambiaData(e)}></textarea>
            </div>
            <div className="campo">
            <label htmlFor="quantity">cantidad</label>
            <input name="quantity" id="quantity" type="number" required onChange={(e)=>cambiaData(e)}/>
            </div>
            <div className="campo">
            <label htmlFor="price">precio</label>
            <input name="price" id="price" type="number" required onChange={(e)=>cambiaData(e)}/>
            </div>

            <div>
                <button type="submit">enviar</button>
            </div>
        </form>
    )
    
}