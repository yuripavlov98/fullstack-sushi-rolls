import s from './Card.module.css'
import React from 'react';
import ContentLoader from "react-content-loader"
import { useContext } from 'react';
import { Context } from '../../App';

const Card = ({id, img, name, weight, price, onAddToCard, isLoading = false }) => {


    const {isProductAdded} = useContext(Context) //контекст для кнопки "добавить" в превью товара
    
    // функция для переключения состояния для кнопки "добавить" в превью товара
    const handleButtonAdded = () => { 
        onAddToCard({id, img, name, weight, price}); // добавляем товар в корзину
    }
    return (
        <div className={s.card}>
            
                {
                    isLoading ? 
                    <div className={s.wrapper}>
                        <ContentLoader 
                            speed={2}
                            width={150}
                            height={250}
                            viewBox="0 0 155 250"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <rect x="0" y="10" rx="10" ry="10" width="150" height="90" /> 
                            <rect x="0" y="125" rx="3" ry="3" width="150" height="15" /> 
                            <rect x="0" y="145" rx="3" ry="3" width="90" height="15" /> 
                            <rect x="0" y="175" rx="10" ry="10" width="80" height="25" /> 
                            <rect x="114" y="170" rx="10" ry="10" width="32" height="32" />
                        </ContentLoader>
                    </div>
                    :
                    <div className={s.wrapper}>
                        <img className={s.img} width={130} height={110} src={process.env.REACT_APP_API_URL + img} alt={name}/>
                        <p className={s.name}>{name}</p>
                        <div className={s.info}>
                            <div className={s.count}>
                                <span className={s.weight}>{weight} гр.</span>
                                <b className={s.price}>{price} руб.</b>
                            </div>
                            <button onClick={handleButtonAdded} className={s.buttons}>
                                <img className={s.add} width={32} height={32} src={isProductAdded(id) ? '/icons/added.svg' : '/icons/none-added.svg'} alt='добавить' />
                            </button>
                        </div>
                    </div> 
                }
            
        </div> 
    );
};

export default Card;


