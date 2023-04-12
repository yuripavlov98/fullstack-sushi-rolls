import React, { useEffect, useState } from 'react';
import s from './Basket.module.css'
import axios from "axios";
import { useContext } from 'react';
import { Context } from '../../App';
import BasketInfo from '../BasketInfo/BasketInfo';

const Basket = ({ onCloseBasket, onRemoveFromCart }) => {
    
    const [isOrderComplete, setIsOrderComplete] = useState(false);


    const { basketItems, setBasketItems } = useContext(Context) // контекст для товаров в корзине

    const onClickOrder = () => {
        setIsOrderComplete(true)
        setBasketItems([])
        // axios.delete(`https://642d57c766a20ec9ce9ad524.mockapi.io/basket${id}`)
    }
    return (
        <div className={s.overlay}>
            <div className={s.basket}>
                <div className={s.title}>
                    <h3>Корзина</h3>
                    <img onClick={onCloseBasket} className={s.delete} width={32} height={32} src='/icons/del-basket.svg' alt='Закрыть корзину'/>
                </div>
                {
                    basketItems.length > 0 
                    ?
                    <div style={{overflow: 'auto', flex: 1, display: 'flex', flexDirection: 'column'}}>
                        <div className={s.items}>
                        {
                            basketItems.map((obj) => (
                                
                                <div className={s.item} key={obj.name}>
                                    <div className={s.info}>
                                        <img className={s.img} width={70} height={70} src={obj.img} alt={obj.alt}/>
                                        <div className={s.description}>
                                            <p className={s.name}>{obj.name}</p>
                                            <span className={s.weight}>{obj.weight} гр.</span><br/>
                                            <b>{obj.price} руб.</b>
                                        </div>
                                    </div>
                                    <img onClick={() => onRemoveFromCart(obj.id)} className={s.delete} width={32} height={32} src='/icons/del-basket.svg' alt='Удалить'/>
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
                            <button onClick={onClickOrder} className={s.button}>
                                Оформить заказ
                                <img width={13} height={12} src='/icons/array-basket.svg' alt='Продолжить'/>
                            </button>
                        </div>
                    </div>

                    :
                    <BasketInfo 
                    title={isOrderComplete ? "Заказ оформлен!" : 'Корзина пуста'} 
                    description={isOrderComplete ? `Ваш заказ скоро будет передан курьерской доставке` : 'Нужно добавить товары'} 
                    image={isOrderComplete ? '/img/complete.jpg' : '/img/empty-cart.jpg'}/>

                }

                
            </div>
        </div>
    );
};

export default Basket;