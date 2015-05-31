var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Youth Council' });
});

/* GET email listing. */
router.get('/sendEmail', function(req, res, next) {
  /* Send emails*/ 
  // create reusable transporter object using SMTP transport
  var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'jrad.hamza@gmail.com',
          pass: 'qqhmvkvkujtsjpah'
      }
  });

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: 'Hamza jrad ✔ <jrad.hamza@gmail.com>', // sender address
      to: 'hamza_jrad@yahoo.fr, hamza.jrad@humediq.com', // list of receivers
      subject: 'Hello ✔', // Subject line
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
  res.send('respond with a resource');
});
module.exports = router;
