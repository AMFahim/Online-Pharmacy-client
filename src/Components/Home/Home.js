import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Header from '../Header/Header';

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fast-basin-70959.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div>
      <Header></Header>
      <div style={{backgroundColor:"antiquewhite"}}>
        <div className="row container">
          {/* <h2>This is home page</h2> */}
          {
            products.map(products => <Products products={products}></Products>)
          }
        </div>
      </div>
    </div>

  );
};

export default Home;