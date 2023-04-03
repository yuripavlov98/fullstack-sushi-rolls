import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import './index.css'
import Basket from "./components/Basket/Basket";

function App() {
  return (
      <div className='wrapper'>
        <div className='container'>
          <Header/>
          <Catalog/>
          <Basket/>
        </div>
      </div>
  );
}

export default App;
