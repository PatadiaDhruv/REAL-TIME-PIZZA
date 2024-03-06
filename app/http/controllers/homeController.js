// FROM HEAR WE WILL TRANSFER ALL THE DATA ON HOME PAGE

// ________________________________________________________________________________

// WITH-OUT DB 

// function homeController(){
//     return {
//         index(req,res){
//             res.render('home');

//         }
//     }
// }

// module.exports=homeController

// ________________________________________________________________________________

// WITH DB

const Menu =require('../../models/menu')

function homeController(){
    return{
        index(req,res){
            Menu.find().then(function (pizzas){
                // console.log(pizzas)

                return res.render('home',{pizzas:pizzas})
            }) 
        }
    }
}

// function homeController(){
//     return{
//        async index(req,res){
//            const pizzas=await Menu.find()
//            return res.render('home',{pizzas:pizzas}) 
           
//         }
//     }
// }


module.exports=homeController
