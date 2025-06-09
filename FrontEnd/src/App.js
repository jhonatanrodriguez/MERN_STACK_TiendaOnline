import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/components/Layout'
import ProductDetails from './pages/product/ProductDetails';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import UpdateProductById from './pages/UpdateProductId';
import CreateProduct from './pages/CreateProduct';
import GetProductAndDeleteById from './pages/GetProductAndDeleteById';
import GetProductById from './pages/GetProductById';
import LoginAdmin from './pages/LoginAdmin';
import Carrito from './pages/Carrito';
import GetPorductCategoria from './pages/GetPorductCategoria';
import GetPorductCaracteristica from './pages/GetPorductCaracteristica';
import GetPorductDescuento from './pages/GetPorductDescuento';
import GetPorductPrecio from './pages/GetPorductPrecio';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="loginAdmin" element={<LoginAdmin />} />
        <Route path="register" element={<Register />} />
        <Route path="updateProducts/:id" element={<UpdateProductById />} />
        <Route path='createProducts' element={<CreateProduct />} />
        <Route path='getAndDeleteProducts' element={<GetProductAndDeleteById />} />
        <Route path="carrito" element={<Carrito />} />
        <Route path='getProducts/:id' element={<GetProductById />}>
          <Route index element={<GetPorductCategoria/>} />
          <Route path='caracteristica' element={<GetPorductCaracteristica/>} />
          <Route path='descuento' element={<GetPorductDescuento/>} />
          <Route path='precio' element={<GetPorductPrecio/>} />
        </Route>
      </Route>
    </Routes>
  )
}
export default App;



