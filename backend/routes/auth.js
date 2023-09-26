import express from 'express'
// import { login, register, verifyemail } from '../Controllers/authController.js'
import { login, register, verifyEmail } from '../Controllers/authController.js'
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/register', register);
router.post('/login', login);
// router.post('/verify-email', verifyemail);
router.get('/verify-email', verifyEmail);


export default router