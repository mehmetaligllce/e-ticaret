import express from "express";
import User from '../models/User.js';
import { hashPassword,comparePassword } from '../modules/password.js';

const router =express.Router();

router.post('/register',async(req,res)=>{
   try{
         if(req.session.user)
            return res.status(400).json({message:'Önce çıkış yapmalısınız.'})
    const {username,email,password}=req.body;
        
    if(!username || !email ||!password)
            return res.status(400).json({message:'Tüm alanları doldurun.'})
    if(password.length<8)
            return res.status(400).json({error:'Şifre en az 8 karakter olmalıdır.'})
    const passwordHash=await hashPassword(password);

    const user=new User({
            username,
            email,
            passwordHash
    });
        
        await user.save();
    res.status(201).json({ message: 'Kullanıcı oluşturuldu.' });
   }
   catch(error){
    res.status(500).json({error:"Kayıt olurken sunucuda bir hata oluştu."});
   }
});

router.post('/login',async (req,res)=>{
    try{
        if(req.session.user)
            return res.status(400).json({message:'Önce çıkış yapmalısınız.'})

        const {username,password}=req.body;
        if(!username || !password)
            return res.status(400).json({error:'Tüm alanları doldurmalısınız.'})
        const user = await User.findOne({username})

        if(!user || !(await comparePassword(password, user.passwordHash))) {
          return res.status(400).json({error:'Kullanıcı adı veya şifre yanlış.'})
        }
        
        req.session.user=user;
        res.status(200).json({message:'Giriş yapıldı.'})
    }
    catch(err)
    {
        return res.status(500).json({error:"Giriş yaparken sunucuda bir hata oluştu."});
    }
});

router.get('/me', async(req, res) => {
    if (!req.session.user) return res.status(401).json({ error: 'Giriş yapılmadı' });
    
    const user = await User.findById(req.session.user._id).select('-passwordHash');
    res.json(user);
});


router.post('/logout', (req, res) => {
    req.session.destroy(); 
    res.clearCookie('connect.sid'); 
    res.status(200).json({ message: 'Başarıyla çıkış yapıldı.' });
});

export default router; 