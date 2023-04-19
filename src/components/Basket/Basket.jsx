import React, { useState } from 'react';
import s from './Basket.module.css'
import BasketInfo from '../BasketInfo/BasketInfo';
import { $host } from '../../http';
import { useBasket } from '../hooks/useBasket';

const Basket = ({ onCloseBasket, onRemoveFromCart }) => {
    
    const {basketItems, setBasketItems, totalPrice} = useBasket();
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);

    

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const {data} = await $host.post("api/orders", {basketItems}); // Отправка товаров из корзины в "заказы"
            setOrderId(data.id)
            setIsOrderComplete(true)
            setBasketItems([])
            await $host.delete("api/basket_product"); // Удаление товаров из корзины
        } catch (e) {
            alert('Не удалось создать заказ')
        }
        setIsLoading(false)
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
                                        <img className={s.img} width={70} height={70} src={process.env.REACT_APP_API_URL + obj.img} alt={obj.name}/>
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
                                    <b>{totalPrice === 0 ? 'Корзина пуста' : totalPrice + ' руб.'}</b>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder} className={s.button}>
                                Оформить заказ
                                <img width={13} height={12} src='/icons/array-basket.svg' alt='Продолжить'/>
                            </button>
                        </div>
                    </div>

                    :
                    <BasketInfo 
                    title={isOrderComplete ? "Заказ оформлен!" : 'Корзина пуста'} 
                    description={isOrderComplete ? `Ваш заказ №${orderId} скоро будет передан курьерской доставке` : 'Нужно добавить товары'} 
                    image={isOrderComplete ? '/img/complete.jpg' : '/img/empty-cart.jpg'}/>

                }

                
            </div>
        </div>
    );
};

export default Basket;