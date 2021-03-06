const express = require('express') 
const app = express()
const cors = require('cors');
app.use(cors())
require('dotenv').config();
const axios = require('axios');
app.use(express.json());
const PORT=process.env.PORT;
const MONGOSSE=process.env.MONGOSSE;

const mongoose = require('mongoose');



mongoose.connect(process.env.MONGOSSE, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => console.log('MongoDB connection established successfully'));

const {getDrink,addDrink,getData,deleteDrink,updataDrink} =require('./controller/user.controller')



app.get('/', (req, res)=> {
  res.send('woking fine') 
});

app.get('/getDrink', getDrink)
app.post('/addDrink',addDrink )
app.get('/getData',getData )
app.delete('/deleteDrink/:id',deleteDrink )
app.put('/updataDrink/:id',updataDrink )


app.listen(PORT , ()=>{
    console.log(`working in port ${PORT}`)
})
