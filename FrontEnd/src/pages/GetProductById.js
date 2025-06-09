import axios from "axios";
import React, {useEffect, useState} from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import foto from "./images/foto.png";
import '../get.css';
function GetProductById() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const getProduct = () => {
        axios.get(`http://localhost:3000/product/${id}`)
            .then((item) => { setData(item.data) })
            .catch((err) => { console.log(err) });
    };
    useEffect(() => {
        getProduct();
    }, []);
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <div>
        <div class="h-[520px] flex flex-col items-center">
            <div class="flex flex-row">
                <div class="w-1/2 flex justify-end mt-2 mb-3">
                    <div key={data.id} class="bg-white rounded-lg h-80 w-56 flex flex-col m-3 mb-20">
                        <div class="bg-gray-100 h-1/2 flex justify-center">
                            {/* <img src={data.imageUrl} class="h-40 w-60"/> */}
                            <img src={foto} class="h-40 w-60" />
                        </div>
                        <div class="h-1/2 flex flex-col">
                            <h3 class="leading-tight text-sm">{data.nombreProducto}</h3>
                            <p class="text-gray-500 text-sm">({data.unidadProducto})</p>
                            <div class="flex flex-row mt-2 mb-10">
                                <div>
                                    <div class="bg-black rounded flex justify-center items-center">
                                        <p class="text-white font-semibold" >-{data.porcentajeDescuento}%</p>
                                    </div>
                                    <p class="font-bold">{`$${Math.floor(data.precioProducto - (data.precioProducto * data.porcentajeDescuento /100)) }`}</p>
                                </div>
                                <div class="text-gray-500 pl-2 line-through">
                                    <p>${data.precioProducto}</p>
                                </div>
                            </div>
                            <p class="font-bold text-xs mb-2">Vendido por: <span class="text-gray-900 font-normal">Almacen</span></p>
                            <Link to={" "} class="bg-orange-500 hover:bg-orange-600 rounded-lg flex flex-row justify-center items-center py-3">
                                <div class="flex flex-row font-semibold text-base text-white font-sans">
                                    <p>MARKET</p>
                                </div>
                            </Link>
                            <Link to={"/getAndDeleteProducts"} class="bg-gray-500 hover:bg-gray-600 rounded-lg flex flex-row justify-center items-center py-3 mt-1">
                                <div class="flex flex-row font-semibold text-base text-white font-sans">
                                    <p>Back</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 h-[450px] flex justify-center mt-2 mb-3">
                    <div class="bg-white w-full h-100 rounded-lg border border-1 border-gray-300 border-double mt-4 p-2
                      flex flex-col justify-center leading-loose">
                        <p class="font-bold">Nombre del Producto: <span class="font-normal">{data.nombreProducto}</span></p>
                        <p class="font-bold">Unidad o medida del Producto: <span class="font-normal">{data.unidadProducto}</span></p>
                        <p class="font-bold">Precio de venta del Producto: <span class="font-normal">{data.precioProducto}</span></p>
                        <p class="font-bold">Categoria del Producto: <span class="font-normal">{data.categoriaProducto}</span></p>
                        <p class="font-bold">Porcentaje de descuento del Producto: <span class="font-normal">{data.porcentajeDescuento} ( % )</span></p>
                    </div>
                    </div>
                </div>
                <hr class="w-[1200px] border-black mx-8 mt-6"></hr>
            </div>
            <div class="flex flex-col justify-start mb-10 ml-8 mr-8">
                <nav className="nav">
                    <NavLink to="." end style={({ isActive }) => isActive ? activeStyles : null}>Categoria</NavLink>
                    <NavLink to="caracteristica" style={({ isActive }) => isActive ? activeStyles : null}>Caracteristicas</NavLink>
                    <NavLink to="precio" style={({ isActive }) => isActive ? activeStyles : null} >Precio</NavLink>
                    <NavLink to="descuento" style={({ isActive }) => isActive ? activeStyles : null}>Descuento</NavLink>
                </nav>
                <Outlet context={{ data }} />
            </div>
        </div>
    )
}
export default GetProductById;

