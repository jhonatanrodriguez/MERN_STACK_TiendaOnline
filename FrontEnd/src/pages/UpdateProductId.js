import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function UpdateProductById() {
  const [formData, setFormData] = useState({
    referencia: '', nombreProducto: '', caracteristicasProducto: '', unidadProducto: '', precioProducto: '',
    categoriaProducto: '', porcentajeDescuento: '', imageUrl: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/${id}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    if(response.ok){
      setFormData({referencia: '', nombreProducto: '', caracteristicasProducto: '', unidadProducto: '', precioProducto: '',
        categoriaProducto: '', porcentajeDescuento: '', imageUrl: ''});
      navigate('/getAndDeleteProducts');
      alert('se actualizo el dato');
  }
  }
  const getProduct = () => {
    axios.get(`http://localhost:3000/product/${id}`)
      .then((item) => { setFormData(item.data) })
      .catch((err) => { console.log(err) });
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <body class="h-[550px] flex flex-col justify-start items-center mt-10">
      <div>
        {error && <p>Error: {error}</p>}
      </div>
      <form onSubmit={handleSubmit} class="flex flex-col justify-center">
        <div class="bg-white w-100 h-100 flex flex-col justify-center items-center rounded-lg shadow-2xl p-8">
          <h1 class="text-2xl font-bold">UPDATE PRODUCT</h1>
          <p class="text-center mt-3 mb-4">Modifique los campos a continuacion:</p>
          <div class="flex flex-row">
            <label class="mx-1">
              <h1 class="font-semibold text-sm text-gray-700">Referencia</h1>
              <input class="w-[140px] p-2 rounded-lg border-2 border-gray-300 hover:border-gray-400"
                type='text' name='referencia' value={formData.referencia} onChange={handleChange}></input>
            </label>
            <label class="mx-1">
              <h1 class="font-semibold text-sm text-gray-700">Nombre del producto</h1>
              <input class="w-[497px] p-2 rounded-lg border-2 border-gray-300 hover:border-gray-400"
                type='text' name='nombreProducto' value={formData.nombreProducto} onChange={handleChange}></input>
            </label>
          </div>
          <div class="flex flex-row">
            <label class="mx-1">
              <h1 class="font-semibold text-sm text-gray-700">Caracteristicas</h1>
              <input class="w-[650px] p-2 rounded-lg border-2 border-gray-300 hover:border-gray-400"
                type='text' name='caracteristicasProducto' value={formData.caracteristicasProducto} onChange={handleChange}></input>
            </label>
          </div>
          <div class="flex flex-row">
            <label class="mx-1">
              <h1 class="font-semibold text-sm text-gray-700">Unidad o medida</h1>
              <input class="w-80 p-2 rounded-lg border-2 border-gray-300 hover:border-gray-400"
                type='text' name='unidadProducto' value={formData.unidadProducto} onChange={handleChange}></input>
            </label>
            <label class="mx-1">
              <h1 class="font-semibold text-sm text-gray-700">Precio de venta</h1>
              <input class="w-80 p-2 rounded-lg border-2 border-gray-300 hover:border-gray-400"
                type='text' name='precioProducto' value={formData.precioProducto} onChange={handleChange}></input>
            </label>
          </div>
          <div class="flex flex-row">
            <label class="mx-1">
              <h1 class="font-semibold text-sm text-gray-700">Categoria</h1>
              <input class="w-[212px] p-2 rounded-lg border-2 border-gray-300 hover:border-gray-400"
                type='text' name='categoriaProducto' value={formData.categoriaProducto} onChange={handleChange}></input>
            </label>
            <label class="mx-1">
              <h1 class="font-semibold text-sm text-gray-700">Porcentaje descuento</h1>
              <input class="w-[140px] p-2 rounded-lg border-2 border-gray-300 hover:border-gray-400"
                type='text' name='porcentajeDescuento' value={formData.porcentajeDescuento} onChange={handleChange}></input>
            </label>
            <label class="mx-1">
              <h1 class="font-semibold text-sm text-gray-700">URL de la imagen</h1>
              <input class="w-[284px] p-2 rounded-lg border-2 border-gray-300 hover:border-gray-400"
                type='text' name='imageUrl' value={formData.imageUrl} onChange={handleChange}></input>
            </label>
          </div>
          <div class="flex flex-row">
            <Link to={"/getAndDeleteProducts"} class="bg-gray-500 hover:bg-gray-600 px-20 py-2 mt-5 mb-2 rounded-lg text-white w-80
                                 hover:bg-gray-300 hover:font-semibold text-center mx-1">BACK</Link>
            <button type="submit" class="bg-orange-500 hover:bg-orange-600 px-20 py-2 mt-5 mb-2 rounded-lg text-white w-80
                                 hover:bg-gray-300 hover:font-semibold text-center mx-1">UPDATE PRODUCT</button>
          </div>
        </div>
      </form>
    </body>
  )
}
export default UpdateProductById;