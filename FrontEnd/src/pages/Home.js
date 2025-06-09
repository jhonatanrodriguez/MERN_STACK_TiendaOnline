import React from "react";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import iconoCompras from "./images/Icono_carritodecompras.png";
import foto from "./images/foto.png";
import publicidad1 from "./images/publicidad_01.png";
import publicidad2 from "./images/publicidad_02.png";
import publicidad3 from "./images/publicidad_03.png";
import publicidad4 from "./images/publicidad_04.png";
function Home() {
    const[searchParams, setSearchParams] = useSearchParams()
    const [products, setProducts] = useState([]);
    const categoriaProductoFilter = searchParams.get("categoriaProducto");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/product`);
                const result = await response.json();
                setProducts(result);
            } catch (error) {
                console.error('error cargando datos:', error)
            }
        };
        fetchData();
    }, []);
    const displayedProducts = categoriaProductoFilter ? products.filter(product => product.categoriaProducto === categoriaProductoFilter) : products;
    const productElements = displayedProducts.map(product => (
        <div key={product._id}>
            <Link to={`/products/${product._id}`} state={{ search: `?${searchParams.toString()}`, categoriaProducto: categoriaProductoFilter }}>
                <div class="bg-white rounded-lg h-80 w-56 flex flex-col m-3 mb-20">
                    <div class="bg-gray-100 h-1/2 flex justify-center">
                        {/* <img src={product.imageUrl} class="h-40 w-60"/> */}
                        <img src={foto} class="h-40 w-60"/>
                    </div>
                    <div class="h-1/2 flex flex-col">
                        <h3 class="leading-tight text-sm">{product.nombreProducto}</h3>
                        <p class="text-gray-500 text-sm">({product.unidadProducto})</p>
                        <div class="flex flex-row mt-2 mb-10">
                            <div class="flex flex-col ">
                                <div class="bg-black w-[50px] rounded flex justify-center items-center">
                                    <p class="text-white font-semibold" >-{product.porcentajeDescuento}%</p>
                                </div>
                                <div>
                                    <p class="font-bold">{`$${Math.floor(product.precioProducto - 
                                        (product.precioProducto * product.porcentajeDescuento /100)) }`}</p>
                                </div>   
                            </div>
                            <div class="text-gray-500 pl-2 line-through">
                                <p>${product.precioProducto}</p>
                            </div>
                        </div>
                        <p class="font-bold text-xs mb-2">Vendido por: <span class="text-gray-900 font-normal">Almacen</span></p>
                        <Link to={"/deleteProduct"} class="bg-orange-500 hover:bg-orange-600 rounded-lg flex flex-row justify-center items-center py-3">
                            <div class="flex flex-row font-semibold text-base text-white font-sans">
                                <p>Agregar</p>
                                <div class="w-5">
                                    <img src={iconoCompras} class=""></img>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    ))
    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }
    return (
        <div class="flex flex-col h-100 ">
            <div class="flex flex-row bg-gray-200 h-10">
                <button class="bg-blue-400 hover:bg-blue-500 mx-2 rounded-lg text-white w-20
                hover:bg-gray-300 hover:font-semibold" onClick={() => handleFilterChange("categoriaProducto", "Mercado")}>Mercado</button>
                <button class="bg-orange-500 hover:bg-orange-600 mx-2 rounded-lg text-white w-20
                hover:bg-gray-300 hover:font-semibold" onClick={() => handleFilterChange("categoriaProducto", "Moda")}>Moda</button>
                <button class="bg-red-500 hover:bg-red-600 mx-2 rounded-lg text-white w-[90px]
                hover:bg-gray-300 hover:font-semibold" onClick={() => handleFilterChange("categoriaProducto", "Tecnologia")}>Tecnologia</button>
                {categoriaProductoFilter ? 
                (<button class="bg-gray-500 hover:bg-gray-600 mx-2 rounded-lg text-white w-[90px]
                    hover:bg-gray-300 hover:font-semibold" onClick={() => handleFilterChange("categoriaProducto", null)} >Clear filter</button>) 
                : null}
            </div>
            <div class="h-60 rounded-lg m-4 flex flex-row justify-between">
                <img src={publicidad1} class="h-60"></img>
                <img src={publicidad2} class="h-60"></img>
                <img src={publicidad3} class="h-60"></img>
            </div>
            <div class="bg-white w-100 h-100 flex flex-col">
                <div class="flex flex-wrap">
                    {productElements}
                </div>
            </div>
            <img src={publicidad4} class="h-40 mb-8"></img>
        </div>
    )
}
export default Home;


























