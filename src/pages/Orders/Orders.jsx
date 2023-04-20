import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../App';
import Card from '../../components/Card/Card';
import { $host } from '../../http';
import s from './Orders.module.css'

const Orders = () => {
    const {onAddToCard} = useContext(Context);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async() => {
            try {
                const { data } = await $host.get('api/orders')
                setOrders(data)
                setIsLoading(false)
            } catch (error) {
                alert('Fail to server')
            }
        })();
    }, [])

    return (
        <div className={s.wrapper}>
            <div>
                <h1>Мои заказы</h1>
            </div>
            <div className={s.orders}>
                {isLoading
                    ? Array.from({ length: 12 }, (_, index) => (
                        <Card key={`loading-${index}`} isLoading={isLoading}/>
                    ))
                    : orders.map((item) => (
                        <Card key={item.id} onAddToCard={onAddToCard} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Orders;