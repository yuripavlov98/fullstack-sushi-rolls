import React from 'react';
import s from './Header.module.css'


const Header = () => {
    return (
        <div>
            <div className={s.header}>
                <div className={s.left}>
                    <img className={s.logo} width={40} height={40} src='/icons/logo.svg' alt='логотип'/>
                    <div>
                        <h3 className={s.title}>SUSHI & ROLLS</h3>
                        <p className={s.delivery}>Доставка суши и роллов</p>
                    </div>
                </div>
                <ul className={s.right}>
                    <li className={s.list}>
                        <img className={s.basket} width={18} height={18} src='/icons/basket.svg' alt='корзина'/>
                        <span className={s.sum}>1205 руб.</span>
                    </li>
                    <li className={s.list}>
                        <img className={s.heart} width={18} height={18} src='/icons/heart.svg' alt='понравившиеся товары'/>
                        <img width={18} height={18} src='/icons/user.svg' alt='учетная запись'/>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;