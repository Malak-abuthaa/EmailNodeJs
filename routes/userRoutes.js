const express = require('express');
const userController = require('../controller/userController');


const router = express.Router();
 

router.post('/send-hello-email', userController.sendHelloEmail);

router.get('/get-emails-report', userController.getEmailsReport);


module.exports = router;