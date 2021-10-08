const EmailsLog = require('../models/emailsLogModel');
const Email = require('../utils/email');


//sendHelloEmail


exports.sendHelloEmail = async(req, res) => {
 try{
  await EmailsLog.create({
    email: req.body.email,
    user : req.body.user,
    status:'delivered'
  });

  const url = `${req.protocol}://${req.get('host')}/hello`;
  await new Email(req.body.user , url).sendHello();
 
  return res.status(200).json({
    status: 'success',
    message: 'The Hello sent to email!'
  });
}catch(error){
  try{
  console.log('DB error')
  await EmailsLog.create({
    email: req.body.email,
    user : req.body.user,
    status:'open'
  
  });
}
  catch(error){

    
  }
}
 

}


 
exports.getEmailsReport = async(req, res) => {

   let emailLog = await EmailsLog.find();
   
  return res.status(200).json({
    data : emailLog
  });
  
}; 