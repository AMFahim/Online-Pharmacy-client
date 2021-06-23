import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Admin from "../Admin/Admin/Admin";



const AddProducts = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState(null);



  const onSubmit = data => {
    // console.log(data);
    const eventData = {
      name: data.name,
      price: data.price,
      category: data.category,
      imageURL: imageURL
    }
    const url = `https://fast-basin-70959.herokuapp.com/addProduct`;
    // console.log(eventData);
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => console.log('adding new event:', res))
  };
  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '94a51f863defbefddf904f3af87d599c');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });


  }
  return (
    <div class="row">
      <div class="col-md-4">
        <Admin />
      </div>
      <div class="col-md-8">
        <form onSubmit={handleSubmit(onSubmit)} className="container">
          <p>Medicine Name:-</p>
          <input style={{ width: "400px" }} className="form-control" placeholder="name" {...register("name")} />
          <br />
          <br />
          <p>Price:-</p>
          <input style={{ width: "400px" }} className="form-control" placeholder="Price" type="number" {...register("price")} />
          <br />
          <br />
          <p>Category:- (Syrup/Tablet)</p>
          <input style={{ width: "400px" }} className="form-control" placeholder="Category" {...register("category")} />
          <br />
          <br />
          <input type="file" name="exampleRequired" onChange={handleImageUpload} />
          {/* {errors.exampleRequired && <span>This field is required</span>} */}
          <br />
          <br />
          <input className="btn btn-outline-success" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;










// import React, { useState } from 'react';
// import "./AddProduct.css";
// import { useForm } from "react-hook-form";
// import axios from 'axios';

// const AddProduct = () => {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const [imageURL, setImageURL] = useState(null);

//   const onSubmit = data => {
//     const productsData = {
//       name: data.name,
//       quantity: data.quantity,
//       price: data.price,
//       imageURL: imageURL,
//     }
//     // console.log(data);
//     const url = `http://localhost:5000/products`
//     // console.log(productsData)
//     fetch(url, {
//       method: 'POST',
//       headers: {
//       'content-type': 'application/json'
//       },
//       body: JSON.stringify(productsData)
//     })
//     .then(res => console.log('server side response', res))
//   };

// const handleImageUpload = products => {
//   console.log(products.target.files[0]);
//   const imageData = new FormData();
//   imageData.set('key', '94a51f863defbefddf904f3af87d599c');
//   imageData.append('image', products.target.files[0]);

//   axios.post('https://api.imgbb.com/1/upload', imageData)
//   .then(function (response) {
//     setImageURL(response.data.data.display_url);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }
//   return (
//     <div>
//     {/* <form onSubmit={handleSubmit(onSubmit)} className="form-deign">
//       <input name="name" defaultValue="test" {...register("example")} />
//       <br/>
//       <br/>
//       <input  />
//       <br/>
//       <br/>
//       <input type="file"  />
//       <br/>
//       <br/>
//       {errors.exampleRequired && <span>This field is required</span>}
//       <input type="submit" />
//     </form> */}

//       <form action="" className="form-deign" onSubmit={handleSubmit(onSubmit)}>
//           <h5>Product Name</h5>
//           <input type="text" name="name" placeholder="Enter name" id="" />
//           <br />
//           <br/>
//           <h5>Quantity</h5>
//           <input type="text" name="quantity" placeholder="Enter name" id="" />
//           <br/>
//           <br/>
//           <h5>Add Price</h5>
//           <input type="number" name="price" placeholder="Enter Price" id="" />
//           <br/>
//           <br/>
//           <h5>Upload Image</h5>
//           <input type="file" name="" placeholder="Enter Price" id="" onChange={handleImageUpload}/>
//           <br/>
//           <br/>
//           <input className="btn btn-primary" type="submit" value="Save"/>
//           </form>
//     </div>
//   );
// };

// export default AddProduct;