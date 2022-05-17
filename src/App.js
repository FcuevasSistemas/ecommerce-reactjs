import './App.css';
import NavBar from './components/NavBar/NavBar'
import CardProduct from './components/Card/Card';


function App() {
  return (
    <div className="App">
        <NavBar />
        <CardProduct producttitle={"Sneakers"}/>
      
  </div>
  );
}

export default App;
