import React from 'react';

const Products = ({products}) => {
 
  return (
    <div className="col-md-4">
      <img style={{height:"300px"}} src={products.imageURL} alt=""/>
      <h3>{products.name}</h3>
    </div>
  );
};

export default Products;