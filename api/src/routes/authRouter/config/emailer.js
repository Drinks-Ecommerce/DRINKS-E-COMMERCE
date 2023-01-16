const nodemailer = require("nodemailer");

const {
    PASSEMAILER, MAIL
} = process.env;


const enviarMail = async (mail, token) => {
    const config = {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: MAIL,
            pass: PASSEMAILER,
        },
        tls: {
            rejectUnauthorized: false
        }
<<<<<<< HEAD
    }

    const mensaje = {
        from: MAIL,
        to: mail,
        subject: "correo de prueba",
        html: "holi estoy probando " + token
    }
    const transport = nodemailer.createTransport(config);
    const info = await transport.sendMail(mensaje)

    console.log("mail enviado")
}

module.exports = { enviarMail }

=======
        const transport = nodemailer.createTransport(config);
        const info = await transport.sendMail(mensaje)
        console.log(info)
         console.log("mail enviado")
        
    }
  module.exports = {enviarMail};

     
>>>>>>> 534cf682a030186073f8208ff65264d7123e926b
