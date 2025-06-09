
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link,  useLocation } from "react-router-dom";
import {useParams } from 'react-router';
import iconoCompras from "../images/Icono_carritodecompras.png";
import foto from "../images/foto.png";
function ProductDetails() {
    const [product, setProduct] = useState(null)
    const { id } = useParams();
    const location = useLocation();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/product/${id}`);
                const result = await response.json();
                setProduct(result);
            } catch (error) {
                console.error('error cargando datos:', error)
            }
        };
        fetchData();
    }, [id]);
    const search = location.state?.search || "";
    const categoriaProducto = location.state?.categoriaProducto || "todos los";
    return (
        <div class="mb-10">
            <section>
            {product ? (
                <div className="h-screen ">
                    <div class="w-100 h-20 ml-6 flex items-center">
                        <p class="text-base font-semibold"><Link to={"/"} class="text-gray-400 hover:text-gray-500">Home</Link>
                            /<Link to={`..${search}`} class="text-gray-400 hover:text-gray-500">{product.categoriaProducto}</Link>/{product.nombreProducto}</p>
                    </div>
                    <div class=" flex flex-row">
                        <div class="w-2/3 flex justify-center items-center">
                            <div class="bg-gray-200 w-full h-full mr-10 ml-4">
                                {/* <img src={product.imageUrl}/> */}
                                <img src={foto}/>
                            </div>
                        </div>
                        <div class="w-1/3 px-6">
                            <div>
                                <p class="text-xl font-semibold">{product.nombreProducto}</p>
                            </div>
                            <div class="bg-white w-full h-100 rounded-lg border border-1 border-gray-300 border-double mt-4 p-2">
                                <p class="font-bold pb-4">Vendido por: <span class="underline font-normal"><Link>Almacenes</Link></span></p>
                                <p class="text-gray-500 text-sm">{product.unidadProducto}</p>
                                <div class="flex flex-row">
                                    <div>
                                        <div class="bg-black rounded flex justify-center items-center">
                                            <p class="text-white font-semibold" >-{product.porcentajeDescuento}%</p>
                                        </div>
                                        <p class="font-bold">{`$${Math.floor(product.precioProducto - (product.precioProducto * product.porcentajeDescuento /100)) }`}</p>
                                    </div>
                                    <div class="text-gray-500 pl-2 line-through">
                                        <p>${product.precioProducto}</p>
                                    </div>
                                </div>
                                <p class="mb-12">Llévalo con <span class="font-bold">4.436</span> Puntos Colombia</p>
                                <div class="mt-4 p-2">
                                    <p class="font-bold">Condiciones de entrega:</p>
                                    <p>Enviado por: <span class="font-bold">Almacenes</span></p>
                                    <p>Disponible para: <span class="font-bold">Compra y recoge</span></p>
                                    <Link to={"/deleteProduct"} class="bg-orange-500 hover:bg-orange-600 rounded-lg flex flex-row justify-center items-center py-3 mt-8">
                                        <div class="flex flex-row font-semibold text-base text-white font-sans">
                                            <p>Agregar</p>
                                            <div class="w-5">
                                                <img src={iconoCompras} class=""></img>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="bg-white w-full h-20 rounded-lg border border-1 border-gray-300 border-double mt-4 p-2">
                                <p class="font-bold">Información adicional</p>
                                <p><span class="font-bold">Gana</span> puntos Colombia</p>
                            </div>
                            <Link to={`..${search}`} class="text text-blue-400 text-lg hover:text-blue-500">&larr; <span>Regresar a {categoriaProducto} productos</span></Link>
                        </div>
                    </div>
                    <div class="bg-gray-100 w-100 h-20 rounded-lg mt-4 mx-4 flex items-center pl-4 ">
                        <p class="text-xl font-semibold">Detalles del producto</p>
                    </div>
                    <hr class="w-100 border-black mx-8"></hr>
                    <div class="w-100 h-40 rounded-lg mt-4 mx-4 flex flex-col pl-4">
                        <p class="font-semibold mb-2">{product.nombreProducto}</p>
                        <p class="font-semibold mb-2">Características</p>
                        <p class="leading-tight">{product.caracteristicasProducto} </p>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
            </section>
        </div>
    )
}
export default ProductDetails;
























