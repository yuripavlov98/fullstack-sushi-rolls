import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import "./index.css";
import Basket from "./components/Basket/Basket";
import { useState } from "react";
import axios from "axios";

function App() {
	const [basketOpened, setBasketOpened] = useState(false); // состояние для переключения корзины
	const [basketItems, setBasketItems] = useState([]); // добавление товаров в корзину

  // функция добавления товара в корзину
  const onAddToCard = (obj) => {
	// отправка товара на сервер
	axios.post('https://642d57c766a20ec9ce9ad524.mockapi.io/basket', obj)
	// 
    setBasketItems(prev => [...prev, obj])
  }

  // функция удаления товара из корзины
  const onRemoveFromCart = (id) => {
	axios.delete(`https://642d57c766a20ec9ce9ad524.mockapi.io/basket/${id}`)
	// 
    setBasketItems(prev => prev.filter(product => product.id !== id))
  }

	return (
		<div className='wrapper'>
			<div className='container'>
				<Header onClickBasket={() => setBasketOpened(true)} />
				<Catalog onAddToCard={onAddToCard}/>
				{basketOpened && (
					<Basket onCloseBasket={() => setBasketOpened(false)}
						items={basketItems}
						setItems={setBasketItems}
						onRemoveFromCart={onRemoveFromCart} 
					/>
				)}
			</div>
		</div>
	);
}

export default App;
