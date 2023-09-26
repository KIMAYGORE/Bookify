// import nodemailer from "nodemailer"
// import User from "../models/User.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import EmailVerificationToken from '../models/EmailVerificationToken.js'

// import { isValidObjectId } from "mongoose";


// // user register
// export const register = async (req, res) => {
//   try {
//     //hashing password
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(req.body.password, salt);

//     // const oldUser = await User.findOne({ email });

//     // if (oldUser)
//     //   return res.status(401).json({ error: "This email is already in use" });

//     const newUser = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: hash,
//       photo: req.body.photo,
//     });

//     await newUser.save();

//     // res.status(200).json({ success: true, message: "Successfully created!" });

//     // generate 6 digit OTP
//     let OTP = '';
//     for (let i = 0; i <= 5; i++) {
//       const randomVal = Math.round(Math.random() * 9)
//       OTP += randomVal;
//     }

//     // store otp inside our db
//     const newEmailVerificationToken = new EmailVerificationToken({ owner: newUser._id, token: OTP })


//     await newEmailVerificationToken.save();

//     // send that otp to our user

//     var transport = nodemailer.createTransport({
//       host: "sandbox.smtp.mailtrap.io",
//       port: 2525,
//       auth: {
//         user: "f98d06e738a2c0",
//         pass: "37cab230aac01f"
//       }
//     });

//     transport.sendMail({
//       from: 'verification@reviewapp.com',
//       to: newUser.email,
//       subject: 'Email Verification',
//       html: `
//    <p>Your verification OTP</p>
//    <h1>${OTP}</h1>`
//     });

//     res.status(201).json({ message: "Please verify your email. OTP has been sent to your email account!", })


//     await newEmailVerificationToken.save();

//   } catch (error) {
//     res
//       .status(500)
//       .json({ success: false, message: "Failed to create! Try again." });
//   }


// };

// export const verifyemail = async (req, res) => {
//   const { userId, OTP } = req.body;

//   if (!isValidObjectId(userId)) return res.json({ error: "Invalid user!" });

//   const user = await User.findById(userId);
//   if (!user) return res.json({ error: "user not found!" });

//   if (user.isVerified) return res.json({ error: "user is already verified!" });

//   const token = await EmailVerificationToken.findOne({ owner: userId });
//   if (!token) return res.json({ error: "token not found!" });

//   const isMatched = await token.compaireToken(OTP)
//   if (!isMatched) return res.json({ error: "Please submit a valid OTP!" });

//   user.isVerified = true;
//   await user.save();

//   await EmailVerificationToken.findByIdAndDelete(token._id)

//   var transport = nodemailer.createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "f98d06e738a2c0",
//       pass: "37cab230aac01f"
//     }
//   });

//   transport.sendMail({
//     from: 'verification@reviewapp.com',
//     to: user.email,
//     subject: 'Welcome Email',
//     html: '<h1>Welcome to our app and thanks for choosing us.</h1>',
//   });

//   res.json({ message: 'Your email is verified.' })

// };

// // user login
// export const login = async (req, res) => {
//   try {
//     const email = req.body.email;
//     console.log(email);
//     const user = await User.findOne({ email });

//     // if user doesn't exist
//     if (!user) {
//       return res
//         .status(404)
//         .json({ success: false, message: "User not found!" });
//     }

//     // if user is exist then check the passord or compare the password
//     const checkCorrectPassword = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );

//     // if password incorrect
//     if (!checkCorrectPassword) {
//       return res
//         .status(401)
//         .json({ susccess: false, message: "Incorrect email or password!" });
//     }

//     const { password, role, ...rest } = user._doc;

//     // create jwt token
//     // A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web(between two parties). It can be used for an authentication system and can also be used for information exchange.The token is mainly composed of header, payload, signature. These three parts are separated by dots(.). JWT defines the structure of information we are sending from one party to the another, and it comes in two forms – Serialized, Deserialized. The Serialized approach is mainly used to transfer the data through the network with each request and response. While the deserialized approach is used to read and write data to the web token.
//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET_KEY,
//       { expiresIn: "15d" }
//     );

//     // set token in the browser cookies and send the response to the client
//     res
//       .cookie("accessToken", token, {
//         httpOnly: true,
//         expires: token.expiresIn,
//       })
//       .status(200)
//       .json({ token, data: { ...rest }, role });
//   } catch (error) {
//     res.status(500).json({ susccess: false, message: "Failed to login" });
//   }
// };

// --------------------xxx------------------xxxx-----------------

import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import nodemailer from "nodemailer";

export const register = async (req, res) => {
  try {
    //hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);



    const emailToken = crypto.randomBytes(64).toString("hex");

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
      emailToken
    });

    await newUser.save();



    let mailTransporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: 'bookify.cdac.mumbai@outlook.com',
        pass: 'KKAMS@123'
      }
    });

    let mailDetails = {
      from: 'bookify.cdac.mumbai@outlook.com',
      to: `${newUser.email}`,
      subject: "verify your email...",
      html: `<p>Hello ${newUser.username}, verify your email by clicking this link...<p>
       <a href ='${process.env.CLIENT_URL}/verify-email?emailToken=${newUser.emailToken}'>verify your
       Email </a>`
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log('Error Occurs');
      } else {
        console.log('Email sent successfully');
      }
    });



    res.status(200).json({ success: true, message: "Successfully created!" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create! Try again." });
  }
};

// user login
export const login = async (req, res) => {
  try {
    const email = req.body.email;

    const user = await User.findOne({ email });

    // if user doesn't exist
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found!" });
    }

    // if user is exist then check the passord or compare the password
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // if password incorrect
    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ susccess: false, message: "Incorrect email or password!" });
    }

    //check if email is verified , if not dont allow user to login 
    if (!user.isVerified) {

      return res
        .status(401)
        .json({ susccess: false, message: "Email not verified! Kindly check your email!" });
    }

    const { password, role, ...rest } = user._doc;





    // create jwt token
    // A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web(between two parties). It can be used for an authentication system and can also be used for information exchange.The token is mainly composed of header, payload, signature. These three parts are separated by dots(.). JWT defines the structure of information we are sending from one party to the another, and it comes in two forms – Serialized, Deserialized. The Serialized approach is mainly used to transfer the data through the network with each request and response. While the deserialized approach is used to read and write data to the web token.
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    // set token in the browser cookies and send the response to the client
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({ token, data: { ...rest }, role });
  } catch (error) {
    res.status(500).json({ susccess: false, message: "Failed to login" });
  }
};



export const verifyEmail = async (req, res) => {
  try {
    const emailToken = req.query.emailToken;
    console.log(req.query);
    if (!emailToken) return res.status(404).json("EmailToken not found");

    const user = await User.findOne({ emailToken });

    if (user) {
      // user.emailToken = null;
      user.isVerified = true;

      await user.save();

      sendVerificationMail(user);

      const token = createToken(user._id);

      res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token,
        isVerified: user?.isVerified,
      });
    } else res.status(404).json("Email verification failed, invalid token");

  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};
const createToken = (_id) => {
  const jwtSecreteKey = process.env.JWT_SECRET_KEY;

  return jwt.sign({ _id }, jwtSecreteKey, { expiresIn: "3d" });
}; 
