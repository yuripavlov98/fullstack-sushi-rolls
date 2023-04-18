import Header from "./components/Header/Header";
import Catalog from "./pages/Catalog/Catalog";
import "./index.css";
import Basket from "./components/Basket/Basket";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createContext } from "react";
import { $host } from "./http";



export const Context = createContext({});

function App() {
	const [products, setProducts] = useState([]); // состояние для карточек товаров
	const [basketOpened, setBasketOpened] = useState(false); // состояние для переключения корзины
	const [basketItems, setBasketItems] = useState([]); // добавление товаров в корзину
	const [isLoading, setIsLoading] = useState(true); // для скелетона

	// при открывании корзины получаем ранее добавленные товары
	useEffect(() => {
        async function fetchData() {
			const basketResponse = await $host.get('api/basket_product')
			const productsResponse = await $host.get('api/product')

			setIsLoading(false)

			setBasketItems(basketResponse.data)
            setProducts(productsResponse.data.rows)

        }
        fetchData()
    }, [])

	// функция добавления товара в корзину
	const onAddToCard = (obj) => {
			// удалить товар из корзины в случае если товар с таким id уже есть в корзине
			if (basketItems.find((item) => Number(item.id) === Number(obj.id))) {
				$host.delete(`api/basket_product/${obj.id}`);
				setBasketItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));

				
			// if (basketItems.find((item) => item.name === obj.name)) {
			// 	setBasketItems((prev) => prev.filter((item) => item.name !== obj.name))
			// 	$host.delete(`api/basket_product/${obj.id}`);


			} else {
				// отправка товара на сервер
				$host.post("api/basket_product", obj);
				// рендер товара в корзине
				setBasketItems((prev) => [...prev, obj]);
			}



	};

	// функция удаления товара из корзины
	const onRemoveFromCart = (id) => {
		$host.delete(`/api/basket_product/${id}`);
		//
		setBasketItems((prev) => prev.filter((product) => product.id !== id));
	};


	const isProductAdded = (id) => {
		return basketItems.some(obj => (obj.id) === (id))
	}

	return (
		<Context.Provider value={{products, basketItems, isProductAdded, setBasketOpened, setBasketItems}}>
			<Router>
				<div className='wrapper'>
					<div className='container'>
						<Header onClickBasket={() => setBasketOpened(true)} />
						{basketOpened && (
							<Basket
								onCloseBasket={() => setBasketOpened(false)}
								setItems={setBasketItems}
								onRemoveFromCart={onRemoveFromCart}
							/>
						)}
						<Catalog 
							onAddToCard={onAddToCard}  
							isLoading={isLoading}
							
						/>

					</div>
				</div>
			</Router>
		</Context.Provider>
	);
}

export default App;
