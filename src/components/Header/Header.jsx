import React, { useContext } from 'react';
import s from './Header.module.css'
import { Link } from "react-router-dom";
import { Context } from '../../App';
import { useBasket } from '../hooks/useBasket';

const Header = (props) => {

    const {totalPrice} = useBasket();
    return (
        <div>
            <div className={s.header}>
                <div className={s.left}>
                    <Link to='/'>
                        <img className={s.logo} width={40} height={40} src='/icons/logo.svg' alt='логотип'/>
                    </Link>
                    <div>
                        <h3 className={s.title}>SUSHI & ROLLS</h3>
                        <p className={s.delivery}>Доставка суши и роллов</p>
                    </div>
                </div>
                <ul className={s.right}>
                    <li onClick={props.onClickBasket} className={s.list}>
                        <img className={s.basket} width={18} height={18} src='/icons/basket.svg' alt='корзина'/>
                        <span className={s.sum}>{totalPrice === 0 ? 'Корзина пуста' : totalPrice + ' руб.'}</span>
                    </li>
                    <li className={s.list}>
                        {/* <img className={s.heart} width={18} height={18} src='/icons/heart.svg' alt='понравившиеся товары'/> */}
                        <img width={18} height={18} src='/icons/user.svg' alt='учетная запись'/>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;