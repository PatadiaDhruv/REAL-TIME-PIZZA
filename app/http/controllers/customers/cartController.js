function cartController(){
    return{
        index(req,res){             //index is naming convantion it is used for reading data  // req,res 6 --->  res,req nai
            res.render('customer/cart');
            // res.send("hello from cart page");
        },

        update(req,res){

            // for first time creation of cart

            if(!req.session.cart){
                req.session.cart={
                    items:{},
                    totalQty:0,
                    totalPrice:0
                }
            }

            let cart=req.session.cart

            // check if item does not exist in cart

              console.log(req.body)

            
 
            //  return res.json({data:'All Okay'})


            if(!cart.items[req.body._id]){
                cart.items[req.body._id]={
                    items:req.body,
                    qty: 1
                }
                cart.totalQty=cart.totalQty + 1
                cart.totalPrice=cart.totalPrice+req.body.price
            }



            else{
                cart.items[req.body._id].qty=cart.items[req.body._id].qty + 1
                cart.totalQty=cart.totalQty + 1
                cart.totalPrice=cart.totalPrice+req.body.price
            }

            

            return res.json({totalQty:req.session.cart.totalQty})
        }
    }

}

module.exports=cartController