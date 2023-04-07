import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import s from "./Catalog.module.css"
const Catalog = ({onAddToCard}) => {
    const [products, setProducts] = useState([]); // состояние для карточек товаров
    
    // берем товары через fetch
    useEffect(() => {
        fetch('https://swamp-versed-nigella.glitch.me/db.json')
            .then(res => {
                return res.json();
            })
            .then(json => {
                setProducts(json);
            })
    }, [])



	return (
        <div>
            <div className={s.top}>
                <h2 className={s.title}>Рекомендуем</h2>
                <div className={s.search}>
                    <img src='/icons/search.svg' alt='поиск'/>
                    <input placeholder="Поиск ..."/>
                </div>
            </div>
            <div className={s.catalog}>
                {
                    products.map((product, i)=> (
                        <Card key={i} name={product.name} img={product.img} alt={product.alt} weight={product.weight} price={product.price} onAddToCard={(obj) => onAddToCard(obj)}/>
                    ))
                }
            </div>
        </div>
	);
};

export default Catalog;
