import React, { useState } from "react";
import { getItem, setItem } from "../services/LocalStorageFuncs";
import { BsFillCartDashFill, BsSearch, BsCart } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { HeaderArea, CartProductArea, LinksArea, FooterArea, PurchaseSummary } from "./Storestyle";

export const Cart = () => {
    const [data, setData] = useState( getItem('carrinhoTs') || [])

    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id)
        setData(arrFilter)
        setItem('carrinhoTs', arrFilter)
    }

  
    const subTotal = data.reduce((acc, cur) => acc + cur.price,0)
    const Total = data.reduce((e, subTotal) => subTotal - e.discount,subTotal)


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
                 <h1>Carrinho de Compras</h1>
            <CartProductArea>
                {
                    data.map((e) => (
                        <div key={e.id}>
                        <img src={e.thumbnail} alt={e.title} />
                        <h4>{e.title} </h4>
                        <h4>R$ {e.price} </h4>
                        <button
                        onClick={ () => removeItem(e)}
                        >
                            <BsFillCartDashFill/>
                        </button>
                        </div>
                    ))
                }
            </CartProductArea>
            <PurchaseSummary>
                    <div>
                    <h2>Resumo da compra </h2>
            <h3>{`SubTotal: R$ ${subTotal}`} </h3>
            <h3>Desconto: R$ - </h3>
            <h3>{`Total: R$ ${Total}`} </h3>
            <button 
            onClick={() => console.log('Compra Finalizada')}
            > Finalizar compra </button>
                </div>
                </PurchaseSummary>
            <FooterArea>
            <div>
        <img src="https://spacentauro-a.akamaihd.net/assets/logo-centauro-header2.0.svg" alt="Centauro"/>
            </div>
        </FooterArea>
        </div>
    )
}