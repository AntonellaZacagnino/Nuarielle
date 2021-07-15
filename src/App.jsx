import {Navbar} from './components/navbar/navbar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/categoria/:catId'>
          <ItemListContainer />
        </Route>
        <Route path='/item/:itemId'>
          <ItemDetailContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
