const mongoose = require('mongoose');



const emailLogSchema = new mongoose.Schema({
  // we should order the order of attruibute of it effect the performance, doens't matter for indexed elements

  email: {
    type: String,
    required: true
  },
  date:{

  	type: Date,
  	default: Date.now(),
  	required:true
  },
  status:{
  	type: String,
  	  enum: ['delivered', 'open'],

  },
  user:{
  	type:String
  }


  //save 
});
 

const EmailsLog = mongoose.model('emails-log', emailLogSchema);


module.exports = EmailsLog;


