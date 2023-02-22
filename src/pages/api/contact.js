import { transporter } from "@/config/nodemailer";

const handler = async (req, res) => {

    if(req.method === "POST") {

        const data = req.body;
        if(!data.name || !data.email || !data.message) return res.status(400).json({message: 'Bad Request'});

        try {

            await transporter.sendMail({
                from: data.email,
                to: process.env.EMAIL,
                subject: 'New Client',
                text: `Name: ${data.name}\r\n Email: ${data.email}\r\n Message: ${data.message}`,
                html: `
                    <h2>Client Message</h2>
                    <hr>
                    <h3>Name: ${data.name}</h3>
                    <h3>Email: ${data.email}</h3>
                    <h3>Messsage: ${data.message}</h3>
                `
            });

            return res.status(200).json({ success: true });

        } catch (error) {

            console.log(error);
            return res.status(400).json({message: error.message});

        };

    };

    return res.status(400).json({message: 'Bad Request'});

};

export default handler;