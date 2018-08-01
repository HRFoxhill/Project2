var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

var options = {
  auth: {
    api_user: 'SENDGRID_USERNAME',
    api_key: 'SENDGRID_PASSWORD'
  }
}

var client = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
        user: 'pjmickelson',
        pass: 'codingb00tcamp!'
    }
});

var email = {
  from: 'pegmickelson@gmail.com',
  to: 'pj_bliss@yahoo.com',
  subject: 'Test for nodemailer',
  text: 'Hello Person!',
  html: '<b>Hello person</b>'
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