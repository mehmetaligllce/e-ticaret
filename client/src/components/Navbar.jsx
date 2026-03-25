import React from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import useCartStore from "../store/useCartStore";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [mesaj, setMesaj] = useState('');
    const navigate = useNavigate();
    const cart = useCartStore((state) => state.cart);
    const [user, setUser] = useState(null);

    const cartTotalItems = cart.reduce((total, item) => total + item.quantity, 0);

    const handleLogout = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/auth/logout', {}, { withCredentials: true });
            
            window.location.href = '/';
        }
        catch (err) {
            console.log(err);
            navigate('/');
        }
    }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/auth/me', { withCredentials: true });
                setUser(response.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchUser();
    }, []);

    return (
        <div className="navbar">
            <Link to='/'><img src="/logo.png" alt="Logo" width="100px" height="50px" /></Link>
            <Link to='/products'>Ürünler</Link>
            <Link to='/profile'>Profil</Link>
            <Link to='/balance'>Bakiye</Link>
            {user?.isAdmin && <Link to='/create'>Ürün Oluştur</Link>}

            <Link to='/cart'>Sepet ({cartTotalItems})</Link>
            {user ? (
                <button onClick={handleLogout}>Çıkış Yap</button>
            ) : (
                <>
                    <Link to='/register'>Kayıt Ol</Link>
                    <Link to='/login'>Giriş Yap</Link>
                </>
            )}

        </div>
    )
}
export default Navbar;