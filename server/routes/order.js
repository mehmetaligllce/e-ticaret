import express from 'express';
import mongoose from 'mongoose';
import Order from '../models/Order.js';

const router=express.Router();

router.post('/create',async(req,res)=>{
    const user=req.session.user;
    if(!user)
        return res.status(401).json({error:'Sipariş vermeden önce giriş yapmalısınız!'})

    const {products,address,cost}=req.body;
    const number=products.reduce((total,product)=>total+product.quantity,0);

    const order=new Order({
        user:user._id,
        products,
        number,
        address,
        cost
    });

    await order.save();
    res.status(201).json({message:'Siparişiniz başarıyla oluşturuldu!'});

})


router.get('/my-orders',async(req,res)=>{
    const user=req.session.user;
    if(!user)
        return res.status(401).json({error:'Önce giriş yapmalısınız!'});
    const orders =await Order.find({user:user._id}).sort({createdAt:-1});
    res.status(200).json(orders);

})
export default router;
