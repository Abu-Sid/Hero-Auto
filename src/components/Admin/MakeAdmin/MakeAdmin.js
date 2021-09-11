import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import "./MakeAdmin.css";

const MakeAdmin = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        const adminEmail = {
            email:data.email
        }
        const url='https://thawing-ravine-07119.herokuapp.com/addAdmin';
        axios.post (url,adminEmail)
            .then(res => {
               console.log(res);
               swal("Admin Added Successfully!", {
                icon: "success",
            });
            })
            .catch((err)=> console.log(err))
            reset()
    };
    return (
        <div className='admin-section'>
        <form className='add-service-form' onSubmit={handleSubmit(onSubmit)}>
          <h1 className='form-header'>Add Admin </h1>
          <div className='input-field'>
          <input name="email" className='form-control'  {...register("email",{ required: true })} placeholder='Enter New Admin Email' />
          </div>
          <input className='primary-btn add-admin' type='submit' value='Add Admin' />
        </form>
      </div>
    );
};

export default MakeAdmin;
