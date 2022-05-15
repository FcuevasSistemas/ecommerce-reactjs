import './App.css';
import NavBar from './components/NavBar/NavBar'
import CardProduct from './components/Card/Card';
import {Container, Grid} from '@mui/material';

function App() {
  return (
    <div className="App">
        <NavBar />
      <Container>
          <Grid container spacing={{ xs: 2, md: 8 }} columns={{ xs: 1, sm: 8, md: 12 }} className='general-product-container'>
          {Array.from(Array(1)).map((_, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <CardProduct image ={"airjordan1travis.jpg"} title="Jordan 1 High Travis Scott" price="1500"/>
    </Grid>
  ))}
  {Array.from(Array(1)).map((_, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <CardProduct image ={"airm1concepts.jpg"} title="Air Max 1 x Concepts" price="250"/>
    </Grid>
  ))}
  {Array.from(Array(1)).map((_, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <CardProduct image ={"adidasforumhomealone.jpg"} title="Adidas Forum Home Alone" price="180"/>
    </Grid>
  ))}
  {Array.from(Array(1)).map((_, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <CardProduct image ={"forumbadbeaster.jpg"} title="Forum Bad Bunny Easter Egg" price="550"/>
    </Grid>
  ))}
  {Array.from(Array(1)).map((_, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <CardProduct image ={"newbalance550.jpg"} title="New Balance 550" price="120"/>
    </Grid>
  ))}
  {Array.from(Array(1)).map((_, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <CardProduct image ={"sbparradunk.jpg"} title="Nike Sb x Parra Abstract" price="450"/>
    </Grid>
  ))}
        </Grid>
      </Container>
      
  </div>
  );
}

export default App;
