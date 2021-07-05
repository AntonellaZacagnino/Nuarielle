// import './App.css';
import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer saludo="Bienvenidx a Nuarielle!" />
    </div>
  );
}

export default App;
