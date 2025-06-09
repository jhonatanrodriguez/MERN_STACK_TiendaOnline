import React from "react";
import { useOutletContext } from "react-router-dom";
function GetPorductCaracteristica(){
    const {data} = useOutletContext();
    return(
        <div class="mt-4 flex flex-col justify-center items-center">
            <h2>{data.caracteristicasProducto} </h2>
        </div>
    )
}
export default GetPorductCaracteristica;