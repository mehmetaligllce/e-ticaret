import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import useCartStore from '../store/useCartStore'

const HomePage=()=>{
    const [mesaj,setMesaj]=useState('');
    const [products,setProducts]=useState([]);
    const [user, setUser] = useState(null); 
    const navigate=useNavigate();

    const addToCart=useCartStore((state)=>state.addToCart);

    const fetchUser=async()=>{
        try{
            const response=await axios.get('http://localhost:3000/api/auth/me',{withCredentials:true});
            setUser(response.data);
        }
        catch(err){
            console.log(err);
        }
    }

    const handleDeleteProduct=async(id)=>{
        try{
            await axios.delete(`http://localhost:3000/api/products/delete/${id}`,{withCredentials:true});
            setProducts(products.filter((product)=>product._id!==id));
            setMesaj("Ürün başarıyla silindi!"); 
        }
        catch(err){
            setMesaj(`Bir hata ile karşılaştık ${err}`);
        }
    }

    useEffect(() => {
        const fetchProducts=async()=>{
            try{
                const response=await axios.get('http://localhost:3000/api/products'); 
                setProducts(response.data);
            }
            catch(err){
                setMesaj(`Bir hata ile karşılaştık ${err}`);
            }
        }
          
        fetchUser();
        fetchProducts();
    }, []);

    return(
        <div>
            <Navbar/>
            
            <div className="page-container">
                <h2>🔥 Özel Araç ve İlan Vitrini</h2>
                {mesaj && <p style={{ color: '#ef4444', marginBottom: '15px' }}>{mesaj}</p>}
                
                <div className="products-grid">
                    {products.map((product)=>(
                        <div key={product._id} className="product-card">
                            <div style={{ overflow: 'hidden', borderRadius: '10px', marginBottom: '15px' }}>
                                <img src={product.image} alt={product.name} />
                            </div>
                            <h3>{product.name}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{product.category || 'Otomotiv / Teknoloji'}</p>
                            <p className="product-price">{product.price.toLocaleString('tr-TR')} ₺</p>

                            {user?.isAdmin && <button className="btn-danger" style={{ marginBottom: '10px' }} onClick={()=>handleDeleteProduct(product._id)}>Ürünü Sil</button>}
                            
                            <button className="btn-primary" onClick={()=>addToCart(product)}>
                                🛒 Sepete Ekle
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )

}

export default HomePage;
