const express = require('express');
const app = express();
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts')
const path = require('path');

const port = process.env.port || 8000   // basicaly agar apde dynamic ke pacchi env variable
// joi to hoy to a port use karvano karnke badhi vakhte ek port avalable na pan hoy


app.get('/', (req,res)=>{

    
    res.render('home');  // views sudhi no path phelethi define hoy 6 atle sidho a 
    res.send("hello from server");
})

//configure  /  set template engine
app.use(expressLayouts)
app.set ('views',path.join(__dirname , '/resources/views'))
app.set ('view engine','ejs')



app.listen(port,()=>{

    console.log(`hello how are you? \n you are running on ${port}`);

})