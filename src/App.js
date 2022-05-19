import './App.css';
import NavBar from './components/NavBar/NavBar'

//import CardProduct from './components/Card/Card';
import ItemListContainer from './components/ItemListContainer/ItemListConatiner';


function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting={"Sneakers"}/>
  </div>

  );
}

export default App;
