import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../App";
import Card from "../../components/Card/Card";
import { $host } from "../../http";
import s from "./Orders.module.css";

const Orders = () => {
	const { onAddToCard } = useContext(Context);
	const [orders, setOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			try {
				const { data } = await $host.get("api/orders");
				setOrders(data);
				setIsLoading(false);
			} catch (error) {
				alert("Ошибка при получении заказов");
			}
		})();
	}, []);

	return (
		<div className={s.wrapper}>
			<div className={s.orders}>
				{orders.length > 0 ? (
					isLoading ? (
						Array.from({ length: 12 }, (_, index) => (
							<Card
								key={`loading-${index}`}
								isLoading={isLoading}
							/>
						))
					) : (
						orders.map((item) => (
                            <div className={s.wrapper}>
                                <div>
                                    <h1>Мои заказы</h1>
                                </div>
                                <Card
                                    key={item.id}
                                    onAddToCard={onAddToCard}
                                    {...item}
                                />
                            </div>

						))
					)
				) : (
					<div className={s.noOrders}>Заказов нет</div>
				)}
			</div>
		</div>
	);
};

export default Orders;
