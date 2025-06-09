import React from "react";
import { useOutletContext } from "react-router-dom";
function GetPorductCategoria(){
    const {data} = useOutletContext();
    return(
        <div class="mt-4 flex flex-col justify-center items-center">
            <h2 class="text-8xl font-bold">{data.categoriaProducto} </h2>
        </div>
    )
}
export default GetPorductCategoria;