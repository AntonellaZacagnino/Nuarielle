import {Navbar} from './components/navbar/navbar';
import { Home } from './components/Home/Home';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/cartContext';
import { Cart } from './components/Cart/Cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/categoria/:catId'>
            <ItemListContainer />
          </Route>
          <Route path='/:categoria/:itemId'>
            <ItemDetailContainer />
          </Route>
          <Route path='/carrito'>
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
