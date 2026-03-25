import React, { useEffect } from "react";
import axios from 'axios'
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ProfilPage=()=>{
    const [orders,setOrders]=useState([])
    const [mesaj,setMesaj]=useState('')
    const navigate=useNavigate();

    useEffect(() => {
        const loadOrders = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/order/my-orders', {
                    withCredentials: true
                });
                setOrders(response.data);
            } catch (err) {
                setMesaj(`Bilgiler çekilirken hata oluştu ${err.response?.data?.error || err.message}`);
            }
        };
        loadOrders();
    }, []);

return(
    <div>
        <Navbar/>
        {mesaj && <div className="mesaj">{mesaj}</div>}
        <div className="profile-container">
            <h2>Siparişlerim</h2>
            <div className="order-list">
                {orders.map((order)=>(
                    <div key={order._id} className="order-item">
                        <p>Sipariş Numarası: {order._id}</p>
                        <p>Toplam Tutar: {order.cost} TL</p>
                        <p>Adres: {order.address}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
)





}
export default ProfilPage;