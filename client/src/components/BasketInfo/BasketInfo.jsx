import s from './BasketInfo.module.css'
import React from 'react';
import { useContext } from 'react';
import { Context } from '../../App';

const BasketInfo = ({image, title, description}) => {
    const {setBasketOpened} = useContext(Context)
    return (
        <div style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <img width={64} height={32} src={image} alt='Пустая корзина'/>
            <span className={s.empty}>{title}</span> 
            <p className={s.description}>{description}</p>
            <button onClick={() => setBasketOpened(false)} className={s.button}>
                <img className={s.arrBack} width={13} height={12} src='/icons/array-back-basket.svg' alt='Продолжить'/>
                Вернуться назад
            </button>
        </div>
    );
};

export default BasketInfo;