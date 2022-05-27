import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListConatiner';
import NavBar from './components/NavBar/NavBar'
import ContainerDetail from './components/ItemDetailContainer/ContainerDetail';


function App() {

  return (
    //JSX
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <ContainerDetail/>
        </div>
  );
}

export default App;
