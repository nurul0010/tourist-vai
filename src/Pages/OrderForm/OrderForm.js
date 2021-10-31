import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './OrderForm.css';

const OrderForm = () => {
    const [order, setOrder] = useState();
    const { register, reset, handleSubmit } = useForm();
    const onSubmit = data => {
        setOrder(data.order);


        fetch("http://localhost:7000/orders", {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('order placed successfully');
                    reset();
                }
            })
    };
    return (

        <div className='section'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name")} placeholder='Name' />
                <input {...register("email")} placeholder='email' />
                <input type="number" {...register("age", { min: 18, max: 99 })} placeholder='age (18+ required)' />
                <input type="number" {...register("phone")} placeholder='phone' />
                <input type='number' {...register("ticket quantity")} placeholder='no of ticket' />
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>

                <input type="submit" />
            </form>
        </div>

    );
};

export default OrderForm;