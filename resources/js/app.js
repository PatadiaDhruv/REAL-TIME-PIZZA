import axios from 'axios'
import Noty from 'noty';
console.log("hello from Shri Hari");

let addToCart=document.querySelectorAll('.add_to_cart');
let cartCounter=document.querySelector('#cartCounter');


// to add msg of top-right of page
function updateCart(pizza){
    axios.post('/update-Cart',pizza).then(res=>{
        console.log(res)
        cartCounter.innerText=res.data.totalQty
        new Noty({
            type:'success',
            timeout:1000,
            text:'Item Added Sucessfully',
            progressBar:false
        }).show();
    }).catch(err=>{
        new Noty({
            type:'error',
            timeout:1000,
            text:'Item Not Added',
            progressBar:false
        }).show();
    })
}



addToCart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        
        let pizza = JSON.parse(btn.dataset.pizza)
        // console.log(pizza);
        updateCart(pizza);
    })

})
