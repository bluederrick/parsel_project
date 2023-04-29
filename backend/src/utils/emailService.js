const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "77c184b27df278",
        pass: "28cda299aaff31"
    }
});

const transporter = nodemailer.createTransport(transport)


transporter.verify(function (err) {
    if (err) {
        console.error(err)
    } else {
        console.log('Transporter verified, and ready to send mail.')
    }
})




const sendEmail = async (from, to, subject, text) => {
    const message = {
        from,
        to,
        subject,
        text
    };
    await transporter.sendMail(message)
}

module.exports = sendEmail;