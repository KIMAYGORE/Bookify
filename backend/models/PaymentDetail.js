import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    razorpay_order_id: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
    },
    user_email: {
        type: String,
    },
    username: {
        type: String,
    },
    razorpay_payment_id: {
        type: String,
        required: true,
    },
    razorpay_signature: {
        type: String,
        required: true,
    },
});

export const Payment = mongoose.model("Payment", paymentSchema);
