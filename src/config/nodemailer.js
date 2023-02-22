import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const password = process.env.APP_PASSWORD;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: email,
        pass: password,
    },
});