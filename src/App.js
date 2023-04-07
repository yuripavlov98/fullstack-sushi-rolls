import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import "./index.css";
import Basket from "./components/Basket/Basket";
import { useState } from "react";

function App() {
	const [basketOpened, setBasketOpened] = useState(false); // состояние для переключения корзины
	const [basketItems, setBasketItems] = useState([]); // добавление товаров в корзину

  // функция добавления товара в корзину
  const onAddToCard = (obj) => {
	// 
    setBasketItems(prev => [...prev, obj])
  }

	return (
		<div className='wrapper'>
			<div className='container'>
				<Header onClickBasket={() => setBasketOpened(true)} />
				<Catalog onAddToCard={onAddToCard}/>
				{basketOpened && (
					<Basket onCloseBasket={() => setBasketOpened(false)}
						items={basketItems}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
