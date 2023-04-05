import s from './Card.module.css'
import React, { useState } from 'react';


const Card = (props) => {
    const [isAdded, setIsAdded] = useState(false); //состояние для кнопки "добавить" в превью товара
    
    // функция для переключения состояния для кнопки "добавить" в превью товара
    const handleButtonAdded = () => { 
        setIsAdded(!isAdded) // переключение состояния кнопки "добавить"
    }
    return (
        <div className={s.card}>
            <div className={s.wrapper}>
            <img className={s.img} width={130} height={110} src={props.img} alt={props.alt}/>
            <p className={s.name}>{props.name}</p>
            <div className={s.info}>
                <div className={s.count}>
                    <span className={s.weight}>{props.weight} гр.</span>
                    <b className={s.price}>{props.price} руб.</b>
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


