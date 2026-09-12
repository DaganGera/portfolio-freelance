import nodemailer from 'nodemailer'

const email = process.env.EMAIL_USER
const password = process.env.EMAIL_PASSWORD

export const transporter = nodemailer.createTransport({
	// service can be ‘hotmail’, ‘yahoo’, etc.
    service: 'gmail',
    auth: {
        user: email,
        pass: password
    }
})
