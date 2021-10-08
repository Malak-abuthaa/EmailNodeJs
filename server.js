const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = express();
app.use(express.json());


 
const userRoutes = require('./routes/userRoutes');
  
const db = process.env.mongoURI;
mongoose
  .connect(db, { useUnifiedTopology: true
    
  })
  .then(() => console.log('  MongoDB connected'))
  .catch((err) => console.log(err));

   

app.use('/users', userRoutes);
 

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`  Server running on port ${port}`));

