import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import './index.css'
import Basket from "./components/Basket/Basket";
import { useState } from "react";

function App() {
  const [basketOpened, setBasketOpened] = useState(false); // состояние для переключения корзины
  return (
      <div className='wrapper'>
        <div className='container'>
          <Header onClickBasket={() => setBasketOpened(true)}/>
          <Catalog/>
          {basketOpened && <Basket onCloseBasket={() => setBasketOpened(false)}/>}
        </div>
      </div>
  );
}

export default App;
