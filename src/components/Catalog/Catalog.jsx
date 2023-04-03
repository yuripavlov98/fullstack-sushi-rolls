import React from "react";
import Card from "../Card/Card";
import s from "./Catalog.module.css"
const Catalog = () => {
    const arr = [
        { name: 'Филадельфия с огурцом', img: '/img/filadelfiya-s-ogurcom.jpg', alt: 'Филадельфия с огурцом', weight: 270, price: 599},
        { name: 'Калифорния', img: '/img/kaliforniya.jpg', alt: 'Калифорния', weight: 210, price: 369},
        { name: 'Сяке маки', img: '/img/syake-maki.jpg', alt: 'Сяке маки', weight: 130, price: 289},
        { name: 'Каппа маки', img: '/img/kappa-maki.jpg', alt: 'Каппа маки', weight: 130, price: 129},
    ]
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
                    arr.map((obj)=> (
                        <Card name={obj.name} img={obj.img} alt={obj.alt} weight={obj.weight} price={obj.price}/>
                    ))
                }
            </div>
        </div>
	);
};

export default Catalog;
