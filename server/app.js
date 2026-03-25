import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import MongoStore from 'connect-mongo';
import dotenv from 'dotenv';
import ProductRoutes from './routes/product.js';
import AuthRoutes from './routes/auth.js';
import OrderRoutes from './routes/order.js';
dotenv.config({
    quiet:true
});

const app=express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(express.json());

app.use(cookieParser());
try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Veritabanına bağlanıldı!");
}
catch(err)
{
    console.log(`is there a problem: ${err}`);
    process.exit(1);
}

app.use(session({
    secret: 'super_gizli_anahtar',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    },
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL
    })
}))

app.use('/api/products',ProductRoutes)
app.use('/api/auth', AuthRoutes);
app.use('/api/order', OrderRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

