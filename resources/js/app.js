console.log("hello from Shri Hari");


let addToCart=document.querySelectorAll('.add_to_cart');
addToCart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log(e);
    })

})
