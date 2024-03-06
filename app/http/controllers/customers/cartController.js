function cartController(){
    return{
        index(req,res){             //index is naming convantion it is used for reading data  // req,res 6 --->  res,req nai
            res.render('customer/cart');
            // res.send("hello from cart page");
        }
    }

}

module.exports=cartController