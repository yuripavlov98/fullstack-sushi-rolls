import React, {  useState } from "react";
import { useContext } from "react";
import { Context } from "../../App";
import Card from "../../components/Card/Card";
import s from "./Catalog.module.css"
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Catalog = ({isLoading}) => {
    const {onAddToCard} = useContext(Context);
    const [searchValue, setSearchValue] = useState(''); // состояние для фильтрации
    const {products} = useContext(Context)
    const renderItems = () => {
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchValue))
        return (
            isLoading 
            ? 
            Array.from({ length: 12 }, (_, index) => (
                <Card key={`loading-${index}`} isLoading={isLoading}/>
            ))
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
            <Swiper
            // install Swiper modules
            modules={[Autoplay]}
            loop={true}
            spaceBetween={10}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
                <SwiperSlide><img className={s.banner} src='/img/qwe.webp' alt=''/></SwiperSlide>
                <SwiperSlide><img className={s.banner} src='/img/qwe2.webp' alt=''/></SwiperSlide>
            </Swiper>
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
