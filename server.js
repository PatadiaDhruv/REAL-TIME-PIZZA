const express = require('express');
const app = express();
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const mongoose = require('mongoose');


// 

//DB CONNECTION

const url = 'mongodb://127.0.0.1:27017/pizza';   //
// mongoose.connect(url,{useNewUrlParser: true, useCreateIndex:true , useUnifiedTopology:true,useFindAndModify:true});

// const connection = mongoose.connection;
// connection.once('open',() => {
//     console.log('Database connected...')
// }).catch(err =>{
//     console.log('Connection Failed..')
// });


mongoose.connect(url).
  catch(error => handleError(error));

// Or:
try {
  mongoose.connect('mongodb://127.0.0.1:27017/pizza');
   console.log("connection Done");
} catch (error) {
  handleError(error);
}



// _______________________________________________________________________________________________________________________


const port = process.env.port || 8000   // basicaly agar apde dynamic ke pacchi env variable
// joi to hoy to a port use karvano karnke badhi vakhte ek port avalable na pan hoy

app.use(express.static('public')) // basicaly a ke 6 ke a badha assest kya agd available 6


//configure  /  set template engine
app.use(expressLayouts)
app.set ('views',path.join(__dirname , '/resources/views'))
app.set ('view engine','ejs')
// routes karta phela j av vu joi a

require('./routes/web')(app) //routes moved to routes/web.js, From there function call routes are connected


app.listen(port,()=>{

    console.log(`hello how are you? \n you are running on ${port}`);

})