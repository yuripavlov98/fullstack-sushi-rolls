import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import s from "./Catalog.module.css"
const Catalog = ({onAddToCard}) => {
    const [products, setProducts] = useState([]); // состояние для карточек товаров
    const [searchValue, setSearchValue] = useState(''); // состояние для фильтрации
    
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

    // функция для отслеживания инпута
    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value);
    }

	return (
        <div>
            <div className={s.top}>
                <h2 className={s.title}>{searchValue ? `Поиск: ${searchValue}` : 'Рекомендуем'}</h2>
                <div className={s.search}>
                    <img src='/icons/search.svg' alt='поиск'/>
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск ..."/>
                    {searchValue && <img onClick={() => setSearchValue('')} className={s.clear} src='/icons/del-basket.svg' alt='Очистить'/>}
                </div>
            </div>
            <div className={s.catalog}>
                {
                    products.filter(product => product.name.toLowerCase().includes(searchValue)).map((product)=> (
                        <Card key={product.name} name={product.name} img={product.img} alt={product.alt} weight={product.weight} price={product.price} onAddToCard={(obj) => onAddToCard(obj)}/>
                    ))
                }
            </div>
        </div>
	);
};

export default Catalog;
