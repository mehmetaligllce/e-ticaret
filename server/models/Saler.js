import mongoose from 'mongoose';

const SalerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    status: { type: String, required: true },
    passwordHash: { type: String, required: true },
    rating: { type: Number, required: true },
    isActive: { type: Boolean, required: true },
})
export default mongoose.model('Saler', SalerSchema);