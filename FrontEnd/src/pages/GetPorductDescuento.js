import React from "react";
import { useOutletContext } from "react-router-dom";
function GetPorductDescuento() {
    const { data } = useOutletContext();
    return (
        <div class="mt-4 flex flex-col justify-center items-center">
            <h2 class="text-8xl font-bold ">{data.porcentajeDescuento}% </h2>
        </div>
    )
}
export default GetPorductDescuento;