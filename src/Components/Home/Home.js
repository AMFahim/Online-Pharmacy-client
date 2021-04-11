import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';


const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() =>{
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then (data => setProducts(data))
  }, [])
  return (
    <div className="row">
      {/* <h2>This is home page</h2> */}
    {
      products.map(products => <Products products={products}></Products>)
    }
    </div>
  );
};

export default Home;