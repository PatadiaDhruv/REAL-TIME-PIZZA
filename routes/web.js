function initRoutes(app){
    // app.get('/', (req,res)=>{
    //     res.render('home');  // views sudhi no path phelethi define hoy 6 atle sidho a 
    //     //res.send("hello from server");
    // })

    const homeController=require('../app/http/controllers/homeController');
    const cartController=require('../app/http/controllers/customers/cartController');
    const authController=require('../app/http/controllers/authController');

    app.get('/',homeController().index)              //A JYARE ROUTE CALL THAY 6 TYARE homeController() nam na function mathi index nam no object function ni jem call thase ane a actual ma key:value pair j 6 je apne avi rite joi saki a 6ie
   
    app.get('/login', authController().login)        // AMA APDE authController() MA COMMA APYO 6 KARNKE ACTUAL MA A KEY:VALUE PAIR 6 JE APNE AVI RITE CALL KARIYE 6IE 
    app.get('/register', authController().register)

    app.get('/cart', cartController().index)
    app.post('/update-Cart', cartController().update)
}

module.exports=initRoutes


