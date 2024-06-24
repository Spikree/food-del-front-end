import axios from 'axios';
import { StoreContext } from '../../context/StoreContext'
import './PlaceOrder.css'
import { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PlaceOrder() {

    const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext);

    const [data,setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data) => ({
            ...data,[name]:value
        }))
    }

    const placeOrder = async (event) => {
        event.preventDefault();
        const orderItems = food_list.reduce((acc, item) => {
            const quantity = cartItems[item._id]; 
            if (quantity && quantity > 0) {
                acc.push({ ...item, quantity });
            }
            return acc;
        }, []);
    
        if (orderItems.length === 0) {
            // Handle the case where there are no items in the cart 
            toast.error("Your cart is empty!");
            return;
        }
    
        const orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + 2,
        };
    
        try {
            const response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
            if (response.data.success) {
                toast.success("Order placed successfully! Redirecting to payment..."); // Success toast
                window.location.replace(response.data.session_url);
            } else {
                toast.error(`Error placing order: ${response.data.message}`); // Error toast
            }
        } catch (error) {
            console.error("Error placing order:", error);
            toast.error("An error occurred while placing your order."); // Error toast
        }
    };
    

    return <>
    <ToastContainer/>
        <form onSubmit={placeOrder} className='place-order'>
            <div className="place-order-left">
                <p className='title'>Delivery Information</p>
                <div className="multi-fields">
                    <input required onChange={onChangeHandler} value={data.firstName} name='firstName' type="text" placeholder='First name' />
                    <input required onChange={onChangeHandler} value={data.lastName} name='lastName' type="text" placeholder='Last name' />
                </div>
                <input required onChange={onChangeHandler} value={data.email} name='email' type="email" placeholder='Email address' />
                <input required onChange={onChangeHandler} value={data.street} name='street' type="text" placeholder='Street' />
                <div className="multi-fields">
                    <input required onChange={onChangeHandler} value={data.city} name='city' type="text" placeholder='City' />
                    <input required onChange={onChangeHandler} value={data.state} name='state' type="text" placeholder='State' />
                </div>
                <div className="multi-fields">
                    <input required onChange={onChangeHandler} value={data.zipcode} name='zipcode' type="text" placeholder='zip code' />
                    <input required onChange={onChangeHandler} value={data.country} name='country' type="text" placeholder='country' />
                </div>
                <input required onChange={onChangeHandler} value={data.phone} name='phone' type="text" placeholder='phone' />
            </div>


            <div className="place-order-right">
            <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>delivery fee</p>
                            <p>{getTotalCartAmount()===0?0:2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
                        </div>
                    </div>
                    <button type='submit' >Proceed to pay</button>
                </div>
            </div>
        </form>
    </>
}