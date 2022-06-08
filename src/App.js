import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListConatiner';
import NavBar from './components/NavBar/NavBar'
import ContainerDetail from './components/ItemDetailContainer/ContainerDetail';
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
  <NavBar/>
  <div className="App">
    <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/item/:id' element={<ContainerDetail/>}/>
      <Route path='/category/:brand' element={<ItemListContainer/>}/>
    </Routes>
      </div>
      </>
  );
}

export default App;
