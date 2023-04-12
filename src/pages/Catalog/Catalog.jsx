import React, {  useState } from "react";
import { useContext } from "react";
import { Context } from "../../App";
import Card from "../../components/Card/Card";
import s from "./Catalog.module.css"
const Catalog = ({onAddToCard, isLoading}) => {
    
    const [searchValue, setSearchValue] = useState(''); // состояние для фильтрации

    const {products} = useContext(Context)
    
    const renderItems = () => {
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchValue))
        return (
            isLoading 
            ? 
            [...Array(10).fill(<Card isLoading={isLoading}/>)]
            // Array(12).fill(<Card isLoading={isLoading}/>) 
            : 
            filteredProducts
            .map((product)=> (
                <Card key={product.name}
                onAddToCard={(obj) => onAddToCard(obj)}
                isLoading={isLoading}
                {...product}
                />
            )) 

        )
            
    }

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
