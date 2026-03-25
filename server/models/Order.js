import mongoose from 'mongoose'

const OrderSchema=new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: { type: [], required: true },
    number: { type: Number, default: 1 },
    address: { type: String, required: true },
    cost: { type: Number, required: true }
})

export default mongoose.model('Order', OrderSchema);