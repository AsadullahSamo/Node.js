const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
        user: "asad.samo549@gmail.com",
        pass: "xbcc acsg wqix gtcj"    // It is app password
    }
})

const mailOptions = {
    from: "asad.samo549@gmail.com",
    to: "asadsamoon8@gmail.com",
    // to: "asadsamoon8@gmail.com, halepotomoiz@gmal.com", --> For multiple receivers
    subject: "Mail by Asad using Node.js",
    text: "Hi, I am Asad. This email was sent to you using Node.js. React to this",
    // html: "<h1>Welcome Asad</h1><p>That was easy!</p>" --> To send html response
}   

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
})