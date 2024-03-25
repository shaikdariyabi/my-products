
import './App.css';

function App() {
  return (
    <div className="App">
      <h4>Products</h4>

      <section>
        <Product name="bangles" price="300"/>
        <Product name="earrings" price="100"/>
        <Product name="rings" price="200" />
      </section>
    </div>
  );
}

function Product({name, price}) {
  return <div className= "products">
    <h2>{name}</h2>
    <p>{price}</p>
  </div>
}
export default App;
