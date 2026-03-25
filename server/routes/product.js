import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json({ message: 'Ürünler getirilemedi ! ' });
    }
});



router.post('/create',(req,res)=>{
    const CreateProduct=async()=>{
        try{
            const{name,description,price,stock,image}=req.body;
            if(!name || !description ||!price || !stock || !image)
                return res.status(400).json({message: 'Tüm alanları doldurmalısınız!'});

            const product = new Product({
                name,
                description,
                price,
                stock,
                image
            });

            await product.save();
            res.status(201).json({message:'Ürün başarıyla eklendi!'});
        }
           catch(err){
            res.status(500).json({message:'Ürün eklenirken hata oluştu!'});
        }
    }
    CreateProduct(req,res);
});


router.delete('/delete/:id',(req,res)=>{
    const DeleteProduct=async()=>{
        const id=req.params.id;
        const deleteProduct=await Product.findByIdAndDelete(id);

        if(!deleteProduct)
            return res.status(404).json({message:'Ürün bulunamadı!'});

        res.status(200).json({message:'Ürün başarıyla silindi!'});
    }
    DeleteProduct(req,res);
})

const seedProducts = async () => {
    try {
        const count = await Product.countDocuments();
        if (count === 0) {
            await Product.create([
                {
                    name: 'Mercedes AMG GT 63 S E Performance',
                    description: '2024 Model Mercedes AMG GT 63 S E Performance',
                    price: 10000000,
                    stock: 10,
                    image: 'http://cdn.motor1.com/images/mgl/W8M6ZN/s1/mercedes-amg-gt-63-s-e-performance-2024.jpg'
                },
                {
                    name: 'Dell XPS 14 9440',
                    description: '2024 Model Dell XPS 14 9440',
                    price: 100000,
                    stock: 100,
                    image: 'https://www.gaming.gen.tr/wp-content/uploads/2025/03/dell-xps-14-9440-intel-core-ultra-7-155h-32gb-lpddr5x-1tb-ssd-rtx4050-6gb-14-5-inc-3-2k-120hz-1ms-oled-w11-pro-dokunmatik-gaming-laptop-xps149440155h-5.jpg'
                },
                {
                    name: 'Ferrari SF-25',
                    description: '2024 Model Ferrari SF-25',
                    price: 100000000,
                    stock: 1,
                    image: 'https://media.formula1.com/image/upload/t_16by9Centre/c_lfill,w_3392/q_auto/v1740000001/fom-website/2025/Ferrari/Ferrari%20SF-25%20launch%20renders/F677_still_02_v11_169.webp'
                }
            ]);
            console.log("3 adet test ürünü veritabanına eklendi!");
        }
    } catch (error) {
        console.log("Ürünler eklenirken hata!", error);
    }
};

seedProducts();

export default router;