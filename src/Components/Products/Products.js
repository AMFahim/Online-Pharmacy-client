import { Link } from '@material-ui/icons';
import React from 'react';
import './Products.css';

const Products = ({ products }) => {

  return (
    <div className="col-md-4">
      <div className="productsCard">
        <img style={{ height: "200px", width: '200px' }} src={products.imageURL} alt="" />
        <div className="details">
          <h5>{products.name} <button className="btn btn-outline-success">Buy Now</button></h5>
          <p>Price: {products.price}</p>
          <p>Category: {products.category}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;