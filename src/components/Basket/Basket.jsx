import React from 'react';
import s from './Basket.module.css'

const Basket = () => {
    return (
        <div style={{display: 'none'}} className={s.overlay}>
            <div className={s.basket}>
                <div className={s.title}>
                    <h3>Корзина</h3>
                    <img className={s.delete} width={32} height={32} src='/icons/del-basket.svg' alt='Удалить'/>
                </div>
                <div className={s.items}>
                    <div className={s.item}>
                        <img className={s.img} width={70} height={70} src='/img/filadelfiya-s-ogurcom.jpg' alt='Филадельфия с огурцом'/>
                        <div className={s.description}>
                            <p className={s.name}>Филадельфия с огурцом</p>
                            <span className={s.weight}>270 гр.</span><br/>
                            <b>599 руб.</b>
                        </div>
                        <img className={s.delete} width={32} height={32} src='/icons/del-basket.svg' alt='Удалить'/>
                    </div>
                    <div className={s.item}>
                        <img className={s.img} width={70} height={70} src='/img/filadelfiya-s-ogurcom.jpg' alt='Филадельфия с огурцом'/>
                        <div className={s.description}>
                            <p className={s.name}>Филадельфия с огурцом</p>
                            <span className={s.weight}>270 гр.</span><br/>
                            <b>599 руб.</b>
                        </div>
                        <img className={s.delete} width={32} height={32} src='/icons/del-basket.svg' alt='Удалить'/>
                    </div>
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