const nodemailer = require("nodemailer");

const {
  PASSEMAILER, MAIL
} = process.env;


/* const enviarMail = async (mail, token) => {
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
  }

  const mensaje = {
    from: MAIL,
    to: mail,
    subject: "correo de prueba",
    html: "holi estoy probando " + token
  }
  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(mensaje)
  console.log(info)
  console.log("mail enviado")
} */

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: MAIL, // generated ethereal user
    pass: PASSEMAILER, // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false
  }
});

transporter.verify().then(() => {
  console.log('Ready for send emails')
})

module.exports = { transporter };

