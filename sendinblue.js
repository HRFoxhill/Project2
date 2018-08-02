require("dotenv").config();
var nodemailer = require('nodemailer');
var sendinBlue = require('nodemailer-sendinblue-transport');


var transporter = nodemailer.createTransport(sendinBlue(options){

var options = {
  auth: {
    apiKey: process.env.SENDINBLUE_KEY,
    // apiUrl: process.env.SENDINBLUE_URL
  }
}
});


// var client = nodemailer.createTransport({
//     service: 'SendGrid',
//     auth: {
//         user: process.env.SENDGRID_UN,
//         pass: process.env.SENDGRID_PW
//     }
// });

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