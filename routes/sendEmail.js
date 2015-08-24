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
      from: 'no-reply-Youth Council Tunisia <no-reply@youthcouncilstunisia.org>', // sender address
      to: email, // list of receivers
      bcc: 'hamza_jrad@yahoo.fr',
      subject: 'no-reply-Youth Council Tunisia', // Subject line
      text: message, // plaintext body
      html: '<p> Hi '+name+', </p>'+'<p> We received your message a coordinator will contact you soon </p>'+
      '<p> Your message is:</p>'+message // html body
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

