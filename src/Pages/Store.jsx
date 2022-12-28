import React, { useEffect, useState } from "react";
import { BsFillCartCheckFill, BsFillCartPlusFill, BsSearch, BsCart } from 'react-icons/bs'
import { getItem, setItem } from "../services/LocalStorageFuncs";
import { Link } from "react-router-dom";
import { HeaderArea, ProductArea, LinksArea, FooterArea, BannerArea } from "./Storestyle";

export const Store = () =>{

    const [data, setData] = useState([])
    const [cart, setCart] = useState( getItem('carrinhoTs') || [])

    useEffect(() => {
        const fetchApi = async() => {
            const url = 'https://api.mercadolibre.com/sites/MLB/search?q=tenis'
            const response = await fetch(url)
            const objJason = await response.json()
            setData(objJason.results)
        }
        fetchApi()
    }, [])

    const handleClick = (obj) => {
        const element = cart.find((e) => e.id === obj.id)
        if(element) {
            const arrFilter = cart.filter((e) => e.id !== obj.id)
            setCart(arrFilter)
            setItem('carrinhoTs',arrFilter)
        } else {
            setCart([...cart, obj])
            setItem('carrinhoTs',[...cart, obj])
        }
    }

    return(
        <div> 
            <HeaderArea>
                <Link to='/'>
            <img src="https://spacentauro-a.akamaihd.net/assets/logo-centauro-header2.0.svg" alt="Centauro"/>
                </Link>
            <input type="text" placeholder="O que está buscando?" /> 
            <button>
            <BsSearch/>
            </button>
            <button>
            <Link to='/cart'>
                <BsCart/>
                </Link>
                </button>
            </HeaderArea>
                <LinksArea>
             <ul>
                <li> Esportes </li>
                <li> Homens </li>
                <li> Mulheres </li>
                <li> Crianças </li>
                <li> Calçados </li>
                <li> Roupas </li>
                <li> Acessórios </li>
                <li> Equipamentos </li>
                <li> Marcas </li>
                <li> Suplementos </li>
                <li> Outlet </li>
             </ul>
                 </LinksArea>
                 <BannerArea>
                    <img src="https://imgcentauro-a.akamaihd.net/04_Email/2023/Leve%20Tudo/Primaria/Centauro_Desk_1400x400.jpg" alt="Banner" />
                 </BannerArea>
                 <h1>Calçados</h1>
                 <ProductArea>      
            {
                data.map((e) => (
                    <div key={e.id} className='products'>
                        <img src={e.thumbnail} alt=''/>
                        <h4>{e.title} </h4>
                        <h4>R$ {e.price} </h4>
                        <button 
                        onClick={() => handleClick(e)}
                        >
                            {
                                cart.some((itemCart) => itemCart.id === e.id) ? (
                                    <BsFillCartCheckFill/>
                                ) : (
                                    <BsFillCartPlusFill/>
                                )
                            }
                        </button>
                    </div> 
                ))
            }
        </ProductArea>
        <FooterArea>
            <div>
        <img src="https://spacentauro-a.akamaihd.net/assets/logo-centauro-header2.0.svg" alt="Centauro"/>
            </div>
        </FooterArea>
    </div>
    )
}