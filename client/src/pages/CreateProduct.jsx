import React from "react";
import axios from 'axios';
import { useState } from "react";
import Navbar from "../components/Navbar";

const CreateProduct=()=>{
    
    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [price,setPrice]=useState('');
    const [stock,setStock]=useState('');
    const [image,setImage]=useState('');
    const [mesaj,setMesaj]=useState('');

    const handleCreateProduct = async (e) => {
        e.preventDefault(); 
        
        try{
            const response=await axios.post('http://localhost:3000/api/products/create',{
                name,
                description,
                price,
                stock,
                image
            }, { withCredentials: true });
            
            setMesaj('Ürün başarıyla oluşturuldu!');
        }
        catch(err){
            setMesaj(`Ürün eklenirken hata oluştu!: ${err.response.data.message}`);
        }
    }


    return(
        <div>
            <Navbar />
            {mesaj && <div className="alert alert-danger">{mesaj}</div>}

            <div className="create-product-container">
                <h2>Ürün Oluştur</h2>
                
                <form onSubmit={handleCreateProduct} method="post">
                    <input type="text" placeholder="Ürün Adı" value={name} onChange={(e)=>setName(e.target.value)} />
                    <input type="text" placeholder="Ürün Açıklaması" value={description} onChange={(e)=>setDescription(e.target.value)} />
                    <input type="text" placeholder="Ürün Fiyatı" value={price} onChange={(e)=>setPrice(e.target.value)} />
                    <input type="text" placeholder="Ürün Stoğu" value={stock} onChange={(e)=>setStock(e.target.value)} />
                    <input type="text" placeholder="Ürün Görseli URL" value={image} onChange={(e)=>setImage(e.target.value)} />
                    <button type="submit">Ürün Oluştur</button>
                </form>

            </div>
           
        </div>
    )
}

export default CreateProduct;




