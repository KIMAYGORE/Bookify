import { instance } from "../index.js";
import crypto from "crypto";
import { Payment } from "../models/PaymentDetail.js";

let userOBJ;

export const checkout = async (req, res) => {


    userOBJ = JSON.parse(req.body.userOBJ);
    const options = {
        amount: Number(req.body.totalAmount * 100), // amount in the smallest currency unit
        currency: "INR",
    };
    const order = await instance.orders.create(options);

    console.log(order);
    res.status(200).json({
        success: true,
        order,
    });

};

export const paymentVerification = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto.createHmac('sha256', "jhHqgNo9cP2pw4hmKx9MFVOk").update(body.toString()).digest('hex');

    // console.log("sig received", razorpay_signature); sig received 2785fba9ae2ad2009d928aef1a74683d0beb12c723bf7780ba50d3b3d0beb12c723bf7780ba50d3b008862f8c
    // console.log("sig generated", expectedSignature); sig generated 2785fba9ae2ad2009d928aef1a74683d0beb12c723bf7780ba50d383d0beb12c723bf7780ba50d3b008862f8c

    //     var response = { "signatureIsValid": "false" }
    //     if (expectedSignature === req.body.response.razorpay_signature)
    //         response = { "signatureIsValid": "true" }
    //     res.send(response);
    // };

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
        // Database comes here

        await Payment.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            user_id: userOBJ._id,
            user_email: userOBJ.email,
            username: userOBJ.username

        });

        res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`);

    }
    else {
        res.status(400).json({
            success: false,
        });
    }


};