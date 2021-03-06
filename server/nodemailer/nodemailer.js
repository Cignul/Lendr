let router = require('express').Router()
let nodemailer = require('nodemailer');


nodemailer.createTestAccount((err, account) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  let mailOptions = {
    from: '"Lendr" <lendr@lends.com>',
    to: 'you@example.com',
    subject: 'Hello! Your lend is expiring soon.',
    text: 'Please check your lend history to return your item on time.', //output
    // html: 'html body'
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // res.render('message', { msg: 'Email has been sent' })
  });
});

module.exports = router

