import React, { useEffect } from 'react';
import s from './Basket.module.css'
import axios from "axios";

const Basket = ({ onCloseBasket, items = [], setItems, onRemoveFromCart }) => {
    
    // при открывании корзины получаем ранее добавленные товары
    // useEffect(() => {
    //     async function fetchData() {
    //         const basketResponse = await axios.get('https://642d57c766a20ec9ce9ad524.mockapi.io/basket')
    //         setItems(basketResponse.data)
    //     }
    //     fetchData()
    // }, [])

    return (
        <div className={s.overlay}>
            <div className={s.basket}>
                <div className={s.title}>
                    <h3>Корзина</h3>
                    <img onClick={onCloseBasket} className={s.delete} width={32} height={32} src='/icons/del-basket.svg' alt='Закрыть корзину'/>
                </div>
                {
                    items.length > 0 
                    ?
                    <div style={{overflow: 'auto'}}>
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
                            <button className={s.button}>
                                Оформить заказ
                                <img width={13} height={12} src='/icons/array-basket.svg' alt='Продолжить'/>
                            </button>
                        </div>
                    </div>

                    :
                    <div style={{display: 'flex', flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                        <img width={64} height={32} src='/img/empty-cart.jpg' alt='Пустая корзина'/>
                        <span className={s.empty}>Корзина пустая</span> 
                        <button onClick={onCloseBasket} className={s.button}>
                            <img className={s.arrBack} width={13} height={12} src='/icons/array-back-basket.svg' alt='Продолжить'/>
                            Вернуться назад
                        </button>
                    </div>

                }

                
            </div>
        </div>
    );
};

export default Basket;