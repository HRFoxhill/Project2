require("dotenv").config();
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

var options = {
  auth: {
    api_user: process.env.SENDGRID_ID,
    api_key: process.env.SENDGRID_SECRET
  }
}

var client = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
        user: process.env.SENDGRID_UN,
        pass: process.env.SENDGRID_PW
    }
});

var email = {
  from: 'pegmickelson@gmail.com',
  to: 'brendonbarringer@gmail.com',
  subject: 'SWORDS for 2000',
  text: 'Celebrity Jeopardy',
  html: '<b>Hi from Peg!</b>'
};

console.log(email);


client.sendMail(email, function(err, info){
    if (err ){
      console.log(error);
    }
    else {
      console.log('Message sent: ' + info.response);
    }
});