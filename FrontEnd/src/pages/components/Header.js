import React from "react";
import logo from "../images/logo_black.png";
import { Link, NavLink } from "react-router-dom";
import icono from "../images/Icono_comprasBlack.png";
function Header() {
    return (
        <div>
            <nav class="bg-yellow-300 flex flex-row text-black font-semibold h-20">
                <div class="w-1/2 flex flex-row p-4">
                    <div class="">
                        <img src={logo} class="h-12" alt="logo market" />
                    </div>
                </div>
                <div class="w-1/2 flex flex-row justify-end items-center mr-10">
                    <div class="flex flex-row">
                        <Link class="ml-5 ml-2" to={"/"}>Home</Link>
                        <Link class="ml-5" to={"/about"}>About</Link>
                        <Link class="ml-5" to={"/login"}>login</Link>
                        <Link class="ml-5" to={"/carrito"}>
                            <div class="flex flex-row">
                                <p>Carrito</p>
                                <img src={icono} class="w-7 ml-1"></img>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header;