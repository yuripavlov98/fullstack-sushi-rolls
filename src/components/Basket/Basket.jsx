import React from 'react';
import s from './Basket.module.css'

const Basket = ({ onCloseBasket, items = [] }) => {
    
    return (
        <div className={s.overlay}>
            <div className={s.basket}>
                <div className={s.title}>
                    <h3>Корзина</h3>
                    <img onClick={onCloseBasket} className={s.delete} width={32} height={32} src='/icons/del-basket.svg' alt='Закрыть корзину'/>
                </div>
                <div className={s.items}>
                    {
                        items.map((obj) => (
                            <div className={s.item} key={obj.name}>
                                <div className={s.info}>
                                    <img className={s.img} width={70} height={70} src={obj.img} alt={obj.alt}/>
                                    <div className={s.description}>
                                        <p className={s.name}>{obj.name}</p>
                                        <span className={s.weight}>{obj.weight} гр.</span><br/>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                </div>
                                <img className={s.delete} width={32} height={32} src='/icons/del-basket.svg' alt='Удалить'/>
                            </div>
                        ))
                    }
                </div>
                <div className={s.total}>
                    <ul>
                        <li className={s.sum}>
                            <span>Итого:</span>
                            <div className={s.dashed}></div>
                            <b>1098 руб.</b>
                        </li>
                    </ul>
                    <button className={s.button}>
                        Оформить заказ
                        <img width={13} height={12} src='/icons/array-basket.svg' alt='Продолжить'/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Basket;