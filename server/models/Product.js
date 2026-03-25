import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String, default: 'Araçlar' },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    stock: { type: Number, default: 1 }
});

export default mongoose.model('Product', ProductSchema);