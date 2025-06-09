import React from "react";
import { useOutletContext } from "react-router-dom";
function GetPorductPrecio(){
    const {data} = useOutletContext();
    return(
        <div class="mt-4 flex flex-col justify-center items-center">
            <h2 class="text-8xl font-bold mt-5">${data.precioProducto}</h2>
        </div>
    )
}
export default GetPorductPrecio;