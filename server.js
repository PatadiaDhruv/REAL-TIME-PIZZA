require('dotenv').config()
const express = require('express');
const app = express();
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session')
const flash =require('express-flash')
const MongoDbStore = require('connect-mongo')(session);

// 

//DB CONNECTION

const url = 'mongodb://127.0.0.1:27017/pizza';   //
//mongoose.connect(url,{useNewUrlParser: true, useCreateIndex:true , useUnifiedTopology:true,useFindAndModify:true});

// //const connection = mongoose.connection;
// // connection.once('open',() => {
// //     console.log('Database connected...')
// // }).catch(err =>{
// //     console.log('Connection Failed..')
// //});


mongoose.connect(url).  
  catch(error => handleError(error));

  const connection = mongoose.connection;

// Or:
try {
  mongoose.connect('mongodb://127.0.0.1:27017/pizza',{useNewUrlParser: true, useCreateIndex:true , useUnifiedTopology:true,useFindAndModify:true});
   console.log("connection Done");
} catch (error) {
  handleError(error);
}



// _______________________________________________________________________________________________________________________


const port = process.env.port || 8000   // basicaly agar apde dynamic ke pacchi env variable
// joi to hoy to a port use karvano karnke badhi vakhte ek port avalable na pan hoy

app.use(express.static('public')) // basicaly a ke 6 ke a badha assest kya agd available 6
app.use(express.json())






//sesion store

 let mongoStore = new MongoDbStore({
    // mongo_url:url,  
    mongooseConnection: connection,
    collection: 'sessions' // name of table only
 });



app.use(session({
  secret: process.env.COOKIE_SECREAT,
  resave: true,
  saveUninitialized: true,
  store: new MongoDbStore({
    mongooseConnection: connection,
    collection: 'sessions'
  }),
  // saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 hours
}));

// Global session
app.use((req,res,next)=>{
  res.locals.session=req.session
  
  next()
})


app.use(flash())  // session will generate from this


//configure  /  set template engine
app.use(expressLayouts)
app.set ('views',path.join(__dirname , '/resources/views'))
app.set ('view engine','ejs')
// routes karta phela j av vu joi a

require('./routes/web')(app) //routes moved to routes/web.js, From there function call routes are connected


app.listen(port,()=>{

    console.log(`hello how are you? \n you are running on ${port}`);

})

// const express = require('express');
// const app = express();
// const ejs = require('ejs');
// const expressLayouts = require('express-ejs-layouts');
// const path = require('path');
// const mongoose = require('mongoose');
// const session = require('express-session');
// const flash = require('express-flash');
// const MongoDbStore = require('connect-mongo')(session)

// // ... (your other code)

// const url = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pizza';

// mongoose.connect(url).then(() => {
//   console.log("Database connected");
// }).catch((error) => {
//   console.error("Error connecting to database:", error);
// });

// const connection = mongoose.connection;

// let mongoStore = new MongoDbStore({
//   mongooseConnection: connection,
//   collection: 'sessions'
// });



// // ... (the rest of your code)
