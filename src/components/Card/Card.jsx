import s from './Card.module.css'
import React from 'react';


const Card = (props) => {

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
                <button className={s.buttons}>
                    <img className={s.add} width={32} height={32} src='/icons/none-added.svg' alt='добавить' />
                </button>
            </div>
        </div>
</div> 
    );
};

export default Card;


