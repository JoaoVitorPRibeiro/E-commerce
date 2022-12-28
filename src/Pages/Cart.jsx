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

   // const Total = data.reduce((input, cur) => input.value * cur.price, 0) - Tem que fazer ele multiplicar o valor do input de quantidade x o preço 
    const subTotal = data.reduce((acc, cur) => acc + cur.price,0)
    const discount = data.reduce((acc,cur) => acc + cur.discounts,0)
    const SummaryTotal = data.reduce((e, subTotal) => subTotal - discount,subTotal)


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
                <section>
                    <h3>Quantidade</h3>
                    <h3>Valor Unitário</h3>
                    <h3>Desconto</h3>
                    <h3>Valor Total</h3>
                </section>
                {
                    data.map((e) => (
                        <div key={e.id}>
                        <img src={e.thumbnail} alt={e.title} />
                        <h4>{e.title} </h4>
                        <input type='number'/>
                        <h4>R$ {e.price} </h4>
                        <h4>R$ {e.discounts} </h4>
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
            <h3>{`Desconto: R$ ${discount} `} </h3>
            <h3>{`Total: R$ ${SummaryTotal}`} </h3>
            <button 
            onClick={() => alert ('Compra Finalizada!')}
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