const express = require('express');
const app = express();
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts')
const path = require('path');

const port = process.env.port || 8000   // basicaly agar apde dynamic ke pacchi env variable
// joi to hoy to a port use karvano karnke badhi vakhte ek port avalable na pan hoy

app.use(express.static('public')) // basicaly a ke 6 ke a badha assest kya agd available 6


//configure  /  set template engine
app.use(expressLayouts)
app.set ('views',path.join(__dirname , '/resources/views'))
app.set ('view engine','ejs')
// routes karta phela j av vu joi a


app.get('/', (req,res)=>{

    
    res.render('home');  // views sudhi no path phelethi define hoy 6 atle sidho a 
    //res.send("hello from server");
})

app.get('/cart', (req,res)=>{

    
    res.render('customer/cart');  // views sudhi no path phelethi define hoy 6 atle sidho a 
    //res.send("hello from server");
})

app.get('/login', (req,res)=>{

    
    res.render('auth/login');  // views sudhi no path phelethi define hoy 6 atle sidho a 
    //res.send("hello from server");
})


app.get('/register', (req,res)=>{

    
    res.render('auth/register');  // views sudhi no path phelethi define hoy 6 atle sidho a 
    //res.send("hello from server");
})





app.listen(port,()=>{

    console.log(`hello how are you? \n you are running on ${port}`);

})