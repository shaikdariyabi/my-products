
import './App.css';

function App() {
  return (
    <div className="App">
      <h4>Products</h4>

      <section>
        <Product name="bangles"/>
        <Product name="earrings" />
        <Product name="rings" />
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
