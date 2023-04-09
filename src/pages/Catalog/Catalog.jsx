import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import s from "./Catalog.module.css"
const Catalog = ({onAddToCard, basketItems, products, isLoading}) => {
    // const [products, setProducts] = useState([]); // состояние для карточек товаров
    const [searchValue, setSearchValue] = useState(''); // состояние для фильтрации
    
    const renderItems = () => {
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchValue))
        return (isLoading 
            ? 
            // [...Array(10)]
            Array(12).fill(<Card isLoading={isLoading}/>) 
            : 
            filteredProducts
            .map((product)=> (
                <Card key={product.name}
                onAddToCard={(obj) => onAddToCard(obj)}
                addedToBasket={basketItems.some(obj => (obj.name) === (product.name))}
                isLoading={isLoading}
                {...product}
                />
            )) 
        )               
    }
    // берем товары через fetch
    // useEffect(() => {
    //     fetch('https://642d57c766a20ec9ce9ad524.mockapi.io/products')
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(json => {
    //             setProducts(json);
    //         })
    // }, [])

    // берем товары через axios
    // useEffect(() => {
    //     async function fetchData() {
    //         const productsResponse = await axios.get('https://642d57c766a20ec9ce9ad524.mockapi.io/products')
    //         setProducts(productsResponse.data)
    //     }
    //     fetchData()
    // }, [])

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
                {renderItems()}
            </div>
        </div>
	);
};

export default Catalog;
