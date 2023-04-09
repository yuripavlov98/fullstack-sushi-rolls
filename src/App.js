import Header from "./components/Header/Header";
import Catalog from "./pages/Catalog/Catalog";
import "./index.css";
import Basket from "./components/Basket/Basket";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	const [products, setProducts] = useState([]); // состояние для карточек товаров
	const [basketOpened, setBasketOpened] = useState(false); // состояние для переключения корзины
	const [basketItems, setBasketItems] = useState([]); // добавление товаров в корзину
	const [isLoading, setIsLoading] = useState(true); // для скелетона

	// при открывании корзины получаем ранее добавленные товары
	useEffect(() => {
        async function fetchData() {
            const basketResponse = await axios.get('https://642d57c766a20ec9ce9ad524.mockapi.io/basket')
			const productsResponse = await axios.get('https://642d57c766a20ec9ce9ad524.mockapi.io/products')

			setIsLoading(false)

			setBasketItems(basketResponse.data)
            setProducts(productsResponse.data)

        }
        fetchData()
    }, [])

	// функция добавления товара в корзину
	const onAddToCard = (obj) => {
			// удалить товар из корзины в случае если товар с таким id уже есть в корзине
			// if (basketItems.find((item) => Number(item.id) === Number(obj.id))) {
			// 	axios.delete(`https://642d57c766a20ec9ce9ad524.mockapi.io/basket/${obj.id}`);
			// 	setBasketItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));

				
			if (basketItems.find((item) => item.name === obj.name)) {
				setBasketItems((prev) => prev.filter((item) => item.name !== obj.name))
				axios.delete(`https://642d57c766a20ec9ce9ad524.mockapi.io/basket/${obj.id}`);
			} else {
				// отправка товара на сервер
				axios.post("https://642d57c766a20ec9ce9ad524.mockapi.io/basket", obj);
				// рендер товара в корзине
				setBasketItems((prev) => [...prev, obj]);
			}


	};

	// функция удаления товара из корзины
	const onRemoveFromCart = (id) => {
		axios.delete(`https://642d57c766a20ec9ce9ad524.mockapi.io/basket/${id}`);
		//
		setBasketItems((prev) => prev.filter((product) => product.id !== id));
	};

	return (
		<Router>
			<div className='wrapper'>
				<div className='container'>
					<Header onClickBasket={() => setBasketOpened(true)} />
					{basketOpened && (
						<Basket
							onCloseBasket={() => setBasketOpened(false)}
							items={basketItems}
							setItems={setBasketItems}
							onRemoveFromCart={onRemoveFromCart}
						/>
					)}
					<Catalog 
					onAddToCard={onAddToCard} 
					basketItems={basketItems} 
					products={products}
					isLoading={isLoading}/>

				</div>
			</div>
		</Router>
	);
}

export default App;
