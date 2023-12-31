import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const emailVerificationTokenSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    token: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        expires: 3600,
        default: Date.now()
    }
});

emailVerificationTokenSchema.pre("save", async function (next) {
    if (this.isModified("token")) {
        this.token = await bcrypt.hash(this.token, 10);
    }
    next();
});

emailVerificationTokenSchema.methods.compaireToken = async function (token) {
    const result = await bcrypt.compare(token, this.token)
    return result;
}

export default mongoose.model("EmailVerificationToken", emailVerificationTokenSchema);

//  verificationToken: {
//     owner: _id,
//     token: otp (needs to be in hashed format),
//     expiryDate: 1 hr
// }