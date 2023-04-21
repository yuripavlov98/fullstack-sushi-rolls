import Header from "./components/Header/Header";
import Catalog from "./pages/Catalog/Catalog";
import "./index.css";
import Basket from "./components/Basket/Basket";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext } from "react";
import { $host } from "./http";
import Orders from "./pages/Orders/Orders";

export const Context = createContext({});

function App() {
	const [products, setProducts] = useState([]); // состояние для карточек товаров
	const [basketOpened, setBasketOpened] = useState(false); // состояние для переключения корзины
	const [basketItems, setBasketItems] = useState([]); // добавление товаров в корзину
	const [isLoading, setIsLoading] = useState(true); // для скелетона

	// при открывании корзины получаем ранее добавленные товары
	useEffect(() => {
		async function fetchData() {
			try {
				const [basketResponse, productsResponse] = await Promise.all([$host.get("api/basket_product"), $host.get("api/product")])
				setIsLoading(false);
				setBasketItems(basketResponse.data);
				setProducts(productsResponse.data.rows);
			} catch (error) {
				alert('Ошибка при получении данных')
			}
		}
		fetchData();
	}, []);

	// функция добавления товара в корзину
	const onAddToCard = async (obj) => {
		try {
			// удалить товар из корзины в случае если товар с таким id уже есть в корзине
			if (basketItems.find((item) => Number(item.id) === Number(obj.id))) {
				setBasketItems((prev) =>
				prev.filter((item) => Number(item.id) !== Number(obj.id)));
				await $host.delete(`api/basket_product/${obj.id}`)
			} else {
				// рендер товара в корзине
				setBasketItems((prev) => [...prev, obj]);
				// отправка товара на сервер
				await $host.post("api/basket_product", obj);
			}
		} catch (error) {
			alert('Ошибка при добавлении товара в корзину')
		}
	};

	// функция удаления товара из корзины
	const onRemoveFromCart = (id) => {
		try {
			$host.delete(`/api/basket_product/${id}`);
			//
			setBasketItems((prev) => prev.filter((product) => product.id !== id));
		} catch (error) {
			alert('Ошибка при удалении товара из корзины')
		}
	};

	const isProductAdded = (id) => {
		return basketItems.some((obj) => obj.id === id);
	};

	return (
		<Context.Provider
			value={{
				products,
				basketItems,
				isProductAdded,
				setBasketOpened,
				setBasketItems,
				onAddToCard,
			}}
		>
			<Router>
				<div className='wrapper'>
					<div className='container'>
						<Header onClickBasket={() => setBasketOpened(true)} />
						<Basket
							onCloseBasket={() => setBasketOpened(false)}
							setItems={setBasketItems}
							onRemoveFromCart={onRemoveFromCart}
							opened={basketOpened}
						/>
						<Routes>
							<Route
								path='/'
								element={<Catalog isLoading={isLoading} />}
							/>
							<Route path='/orders' element={<Orders />} />
						</Routes>
					</div>
				</div>
			</Router>
		</Context.Provider>
	);
}

export default App;
