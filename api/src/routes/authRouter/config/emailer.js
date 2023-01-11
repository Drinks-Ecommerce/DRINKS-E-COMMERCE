const nodemailer = require("nodemailer");

const createTrans = () => {
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "8fce971d721e94",
            pass: "d40e01c924384c"
        }
    });

    return transport;
}

/* const sendMail = async () => {
    const transporter = createTrans()
    const info = await transporter.sendMail({
        from: '"Vinario Drinks 🍸" <vinario.drinks@gmail.com>', // sender address
        to: "info@info.net, baz@example.com", // list of receivers
        subject: "Bienvenido a tu comunidad  ✔", // Subject line
        html: `<h4>Hi!</h4>
        <p>Welcome to Vinario Drinks!
    It is a pleasure for us to have you here.</br>
    </br>
    Sending you the best!</br>
    VinarioDrinks Team.
    <p/>`, // html body
    });
    console.log("Message sent: %s", info.messageId);
    return
} */

module.exports = {createTrans};
/* exports.sendMail = () => sendMail(); */

