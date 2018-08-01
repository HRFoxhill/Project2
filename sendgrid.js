var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

var options = {
  auth: {
    api_user: 'SENDGRID_UN',
    api_key: 'SENDGRID_PW'
  }
}

var client = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
        user: 'email',
        pass: 'xxxxx'
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