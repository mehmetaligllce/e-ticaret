import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
const LoginPage=()=>{
    const [password,setPassword]=useState('');
    const [username,setUsername]=useState('');
    const[mesaj,setMesaj]=useState('');

    const navigate=useNavigate();

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', {
                username,
                password
            }, { withCredentials: true })

            setMesaj(response.data.message);
            setTimeout(() => {
                navigate('/');
            }, 1500);
        }
        catch (err) {
            setMesaj(err.response?.data?.error || err.response?.data?.message || 'Bir hata oluştu');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="form-container">
                <h1 style={{ marginBottom: '20px' }}>Giriş Yap 🔐</h1>
                <input type="text" placeholder="Kullanıcı Adı" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)} />
                
                <button className="btn-primary" style={{ width: '100%', marginBottom: '15px' }} onClick={handleRegister}>
                    Giriş Yap
                </button>
                {mesaj && <p style={{ color: 'var(--success)' }}>{mesaj}</p>}
                
                <button style={{ width: '100%', padding: '10px', background: 'transparent', border: '1px solid var(--border)', color: 'white', borderRadius: '8px', cursor: 'pointer' }} onClick={() => navigate('/register')}>
                    Hesabın yok mu? Kayıt Ol
                </button>
            </div>
        </div>
    );
}
export default LoginPage;