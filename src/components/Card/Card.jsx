import s from './Card.module.css'
import React, { useState } from 'react';


const Card = ({img, alt, name, weight, price, onAddToCard }) => {
    const [isAdded, setIsAdded] = useState(false); //состояние для кнопки "добавить" в превью товара
    
    // функция для переключения состояния для кнопки "добавить" в превью товара
    const handleButtonAdded = () => { 
        onAddToCard({img, alt, name, weight, price}); // добавляем товар в корзину
        setIsAdded(!isAdded) // переключение состояния кнопки "добавить"
    }
    return (
        <div className={s.card}>
            <div className={s.wrapper}>
            <img className={s.img} width={130} height={110} src={img} alt={alt}/>
            <p className={s.name}>{name}</p>
            <div className={s.info}>
                <div className={s.count}>
                    <span className={s.weight}>{weight} гр.</span>
                    <b className={s.price}>{price} руб.</b>
                </div>
                <button onClick={handleButtonAdded} className={s.buttons}>
                    <img className={s.add} width={32} height={32} src={isAdded ? '/icons/added.svg' : '/icons/none-added.svg'} alt='добавить' />
                </button>
            </div>
        </div>
</div> 
    );
};

export default Card;


