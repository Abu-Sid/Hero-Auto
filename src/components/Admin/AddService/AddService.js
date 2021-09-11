import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit,reset} = useForm();
  const [imageURL, setImageURL] = useState(null);
  
  const onSubmit = data => {
    const serviceData = {
      name: data.name,
      price:data.price,
      imageURL: imageURL,
      description: data.description,
    };
    const url = `https://thawing-ravine-07119.herokuapp.com/addService`;
    console.log(serviceData);
    axios.post(url,serviceData)
    .then(res=>{
      swal("New Service Added Successfully!", {
        icon: "success",
    });
    })
    .catch((err)=>console.log(err))
    reset()
  };

  const handleImageUpload = event => {
    const image=event.target.files[0];
    const imageData = new FormData();
    imageData.set('key', '0ebf60e54ff9b3704a6d9cb7fb796b92');
    imageData.append('image', image);
    
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
      const imageLink=response.data.data.display_url;
      setImageURL(imageLink);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  return (
   
    <div className="admin-container"> 
      <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Add New Service</h1>
      <label>Service Name</label>
      <input name="name"  {...register("name")} />
      <label>Price</label>
      <input type="number" name="price" {...register("price")} />
      <label name='description'>Add Description</label>
      <textarea name='description' id='description' {...register("description")} />
      <label>Upload Image</label>
      <input name="exampleRequired" type="file" onChange={handleImageUpload} />
      <input type="submit"  className="submitButton"/>
      </form>
    </div>
  
  );
};

export default AddService;