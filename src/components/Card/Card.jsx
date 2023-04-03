import s from './Card.module.css'
import React from 'react';


const Card = () => {
    const arr = [
        { name: 'Филадельфия с огурцом', alt: 'Филадельфия с огурцом', weight: 270, price: 599},
        { name: 'Калифорния', alt: 'Калифорния', weight: 210, price: 369},
    ]
    return (
        <div className={s.card}>
            <div className={s.wrapper}>
                <img className={s.img} width={130} height={110} src='/img/filadelfiya-s-ogurcom.jpg' alt='Филадельфия с огурцом'/>
                <p className={s.name}>Филадельфия с огурцом</p>
                <div className={s.info}>
                    <div className={s.count}>
                        <span className={s.weight}>270 гр.</span>
                        <b className={s.price}>599 руб.</b>
                    </div>
                    <div className={s.buttons}>
                        <img className={s.add} width={32} height={32} src='/icons/none-added.svg' alt='добавить' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;