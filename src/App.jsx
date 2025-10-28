import {Navbar} from './components/navbar/navbar';
import { Home } from './components/Home/Home';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/cartContext';
import { Cart } from './components/Cart/Cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categoria/:catId' element={<ItemListContainer />} />
          <Route path='/:categoria/:itemId' element={<ItemDetailContainer />} />
          <Route path='/carrito' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
