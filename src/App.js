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
      <Route path='/product/:id' element={<ContainerDetail/>}/>
      {/* <Route path='/item/:category' element={<ContainerDetail/>}/> */}
    </Routes>
      </div>
      </>
  );
}

export default App;
