var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

/* GET email listing. */
exports.sendEmail= function(req, res) {
  /* Send emails*/ 
  // create reusable transporter object using SMTP transport
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  console.log("name",name);
  console.log("email",email);
  console.log("message",message);
  var transporter = nodemailer.createTransport({
    host: "ns0.ovh.net", // hostname
    secure: false, // use SSL
    port: 587, // port for secure SMTP
    tls: {
        rejectUnauthorized:false
    },
    auth: {
        user: 'no-reply@youthcouncilstunisia.org',
          pass: 'youthcouncil2015'
    }
  });

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: 'Youth Council ✔ <no-reply@youthcouncilstunisia.org>', // sender address
      to: 'hamza_jrad@yahoo.fr', // list of receivers
      subject: 'no-reply ✔', // Subject line
      text: 'Hello world ✔', // plaintext body
      html: '<b>Hello world ✔</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
      }else{
          console.log('Message sent: ' + info.response);
      }
  });
  //res.send('respond with a resource');
  res.redirect('/');
};

