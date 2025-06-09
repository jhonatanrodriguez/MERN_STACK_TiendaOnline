import React, { useEffect, useState, useContext, createContext} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import About from "./About";
function GetProductAndDeleteById() {
    const[data,setData] = useState([]);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const DeleteProduct = async (_id) => {
        try {
            const response = await fetch(`http://localhost:3000/${_id}`, {
                method: "DELETE",
                // headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error("Failed to delete item");
                
            }
            setData(data.filter((item) => item._id !== _id));
            alert('Dato eliminado!!!');
            navigate('/getAndDeleteProducts');
        } catch (error) {
            setError(error.message);
        }
    }
    const getProducts = () => {
        axios.get("http://localhost:3000/product")
            .then((res) => { setData(res.data) })
            .catch((err) => { console.log(err); });
    };
    useEffect(() => {
        getProducts();
    }, []);

    if (data.length < 0) {
        return <h1>no product found</h1>;
    } else {
        return (
            <div class="relative overflow-x-auto">
                <div class="bg-gray-700 flex justify-center h-10 items-center font-semibold text-white">
                    <h1>TABLA DE PRODUCTOS DISPONIBLES EN EL ALMACEN</h1>
                </div>
                {error && <p>Error: {error}</p>}
                <table class="w-screen text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                        <tr>
                            {/* <th scope="col" class="px-6 py-3">Id</th> */}
                            <th scope="col" class="px-6 py-3">Referencia</th>
                            <th scope="col" class="px-6 py-3">Nombre</th>
                            <th scope="col" class="px-6 py-3">Unidad</th>
                            <th scope="col" class="px-6 py-3">Precio</th>
                            <th scope="col" class="px-6 py-3">Categoria</th>
                            <th scope="col" class="px-6 py-3">( % ) Descuento</th>
                            <div class="flex flex-row">
                                <th scope="col" class="px-6 py-3">Acciones
                                    <Link to={"/createProducts"} class="bg-gray-700 px-3 py-2 my-5 rounded-lg text-white
                                    hover:bg-orange-600 hover:font-bold  mr-1 ml-8"><span class="text-xl px-1">+</span>CREATE</Link>
                                </th>
                            </div>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, i) => {
                            return (
                                <tr key={i + 1} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    {/* <td class="px-6 py-4">{i + 1} </td> */}
                                    {/* <td class="px-6 py-4">{item.id} </td> */}
                                    <td class="px-6 py-4">{item.referencia} </td>
                                    <td class="px-6 py-4">{item.nombreProducto} </td>
                                    <td class="px-6 py-4">{item.unidadProducto} </td>
                                    <td class="px-6 py-4">{item.precioProducto} </td>
                                    <td class="px-6 py-4">{item.categoriaProducto} </td>
                                    <td class="px-6 py-4">{item.porcentajeDescuento} </td>
                                    <td class="px-5 py-4 flex flex-row">
                                        <Link to={`/updateProducts/${item._id}`} class="bg-yellow-300 px-5 py-1 my-5 rounded-lg text-black
                                    hover:bg-yellow-400 hover:font-bold mr-1" >Edit</Link>
                                        <Link to={`/getProducts/${item._id}`} class="bg-orange-500 px-5 py-1 my-5 rounded-lg text-white
                                    hover:bg-orange-600 hover:font-bold  mr-1">Get</Link>
                                        <button onClick={() => DeleteProduct(item._id)} class="bg-gray-500 px-5 py-1 my-5 rounded-lg text-white
                                    hover:bg-gray-600 hover:font-bold">Delete</button>
                                    </td>
                                </tr>
                            );
                        })};
                    </tbody>
                </table>
            </div>
        );
    }
};
export default GetProductAndDeleteById;