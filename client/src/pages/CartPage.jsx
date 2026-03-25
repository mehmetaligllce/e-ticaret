import React from "react";
import useCartStore from "../store/useCartStore";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const CartPage = () => {

    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const clearCart = useCartStore((state) => state.clearCart);

    const navigate = useNavigate();

    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div>
            <Navbar />

            <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
                <h2>🛒 Sepetiniz</h2>

                {cart.length === 0 ? (
                    <p>Sepetiniz şu an boş. Anasayfaya dönüp ürün ekleyin!</p>
                ) : (
                    <div>
                        {cart.map((item) => (
                            <div key={item._id} style={{ display: 'flex', border: '1px solid #ccc', margin: '10px 0', padding: '10px', alignItems: 'center', justifyContent: 'space-between', borderRadius: '8px' }}>
                                <img src={item.image} alt={item.name} width={100} height={100} style={{ objectFit: 'cover', borderRadius: '8px' }} />

                                <div>
                                    <p style={{ fontWeight: 'bold' }}>{item.name}</p>
                                    <p style={{ color: 'gray' }}>Adet: {item.quantity}</p>
                                </div>

                                <p style={{ fontWeight: 'bold', color: '#27ae60' }}>{(item.price * item.quantity).toLocaleString('tr-TR')} ₺</p>

                                <button onClick={() => removeFromCart(item._id)} style={{ background: '#e94560', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                                    Sil ❌
                                </button>
                            </div>
                        ))}

                        <div style={{ marginTop: '20px', textAlign: 'right' }}>
                            <h3 style={{ borderTop: '2px solid #ccc', paddingTop: '10px' }}>
                                Toplam: <span style={{ color: '#27ae60' }}>{totalPrice.toLocaleString('tr-TR')} ₺</span>
                            </h3>

                            <button style={{ background: '#555', color: 'white', padding: '10px 20px', marginRight: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={clearCart}>
                                Sepeti Boşalt
                            </button>

                            <button style={{ background: '#27ae60', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => navigate('/order')}>
                                Satın Al  🚀
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartPage;