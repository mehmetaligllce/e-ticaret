import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
    balance: { type: Number, default: 0 },
    isAdmin: { type: Boolean, default: false },
    address: { type: String, default: '' },
    isActive: { type: Boolean, default: true }
})
export default mongoose.model('User', UserSchema);