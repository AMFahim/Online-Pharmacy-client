import React, { useState } from 'react';
import "./AddProduct.css";
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProduct = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = data => {
    const productsData = {
      name: data.name,
      quantity: data.quantity,
      price: data.price,
      imageURL: imageURL,
    }
    console.log(data);
    const url = `http://localhost:5000/AddProduct`
    console.log(productsData)
    fetch(url, {
      method: 'POST',
      headers: {
      'content-type': 'application/json'
      },
      body: JSON.stringify(productsData)
    })
    .then(res => console.log('server side response', res))
  };

const handleImageUpload = products => {
  console.log(products.target.files[0]);
  const imageData = new FormData();
  imageData.set('key', '94a51f863defbefddf904f3af87d599c');
  imageData.append('image', products.target.files[0]);

  axios.post('https://api.imgbb.com/1/upload', imageData)
  .then(function (response) {
    setImageURL(response.data.data.display_url);
  })
  .catch(function (error) {
    console.log(error);
  });
}
  return (
    <div>
    {/* <form onSubmit={handleSubmit(onSubmit)} className="form-deign">
      <input name="name" defaultValue="test" {...register("example")} />
      <br/>
      <br/>
      <input  />
      <br/>
      <br/>
      <input type="file"  />
      <br/>
      <br/>
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form> */}

      <form action="" className="form-deign" onSubmit={handleSubmit(onSubmit)}>
          <h5>Product Name</h5>
          <input type="text" name="name" placeholder="Enter name" id="" />
          <br />
          <br/>
          <h5>Quantity</h5>
          <input type="text" name="quantity" placeholder="Enter name" id="" />
          <br/>
          <br/>
          <h5>Add Price</h5>
          <input type="number" name="price" placeholder="Enter Price" id="" />
          <br/>
          <br/>
          <h5>Upload Image</h5>
          <input type="file" name="" placeholder="Enter Price" id="" onChange={handleImageUpload}/>
          <br/>
          <br/>
          <input className="btn btn-primary" type="submit" value="Save"/>
          </form>
    </div>
  );
};

export default AddProduct;