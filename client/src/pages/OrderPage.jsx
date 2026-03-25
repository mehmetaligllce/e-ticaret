import React from "react";
import axios from 'axios';
import useCartStore from "../store/useCartStore.js";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const OrderPage = () => {
    const cart = useCartStore((state) => state.cart);
    const clearCart = useCartStore((state) => state.clearCart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const totalPrice = useCartStore((state) => state.getTotalPrice);
    const navigate = useNavigate();

    const [number, setNumber] = useState(1);
    const [address, setAddress] = useState('');
    const [mesaj, setMesaj] = useState('');

    const handleOrder = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/order/create', {
                products: cart,
                number,
                address,
                cost: totalPrice(),
            }, {
                withCredentials: true
            });
            setMesaj(response.data.message);
            clearCart();
            navigate('/')

        }
        catch (err) {
            setMesaj(err.response.data.error);
            navigate('/');
        }
    }

    return (
        <div className="order-page">
            <Navbar />
            {mesaj && <div className="mesaj">{mesaj}</div>}
            <div className='order-container'>
                <h2>Sipariş Özeti</h2>
                <div className="order-summary">
                    {cart.map((item) => (
                        <div key={item._id} className="order-item">
                            <img src={item.image} alt={item.name} width={100} height={100} style={{ objectFit: 'cover', borderRadius: '8px' }} />
                            <div className="order-item-info">
                                <h3>{item.name}</h3>
                                <p>{item.price} TL</p>
                                <p>Adet: {item.quantity}</p>
                            </div>
                            <button onClick={() => removeFromCart(item._id)}>Sil</button>
                        </div>
                    ))}
                </div>
                <div className="order-info">
                    <p>Toplam Tutar: {totalPrice()} TL</p>
                    <input type="text" placeholder="Adres" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <button onClick={handleOrder} className="order-button">Sipariş Ver</button>
                </div>
            </div>


        </div>
    )




}
export default OrderPage;