



const product = [
    {
        id: 0,
        image:'asset/c9.jpg',
        title:'Ordinary Combo For Smooth And Glowing Skin',
        price:200,
    },
    {
        id: 1,
        image: 'asset/c8.jpg',
        title: 'Liquid Lipstick of 2 by Kylie Cosmetics',
        price: 80,
    },
    {
        id: 2,
        image: 'asset/E5.jpg',
        title: 'White Lehenga Set with Blouse',
        price: 500,
    },
    {
        id: 3,
        image: 'asset/E1.jpg',
        title: 'Anarkali Floral Printed Set',
        price:  400,
    },
    {
        id: 4,
        image: 'asset/z5.jpg',
        title: 'Fit me matte combo from Maybelline',
        price:  350,
    },
    {
        id:5,
        image:'asset/z12.jpg',
        title:'Cera Ve Moisturising Lotion and Foaming Cleanser',
        price:600,
    }
 ];
 const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
 document.getElementById('root').innerHTML = categories.map((item)=>
 {
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
 }).join('')
 
 var cart =[];
 
 function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
 }
 function delElement(a){
    cart.splice(a, 1);
    displaycart();
 }
 
 function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
 
    
 }
 