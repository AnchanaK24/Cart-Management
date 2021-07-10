//GLOBAL
var products=[];
var cartItems=[];
var cart_n=document.getElementById('cart_n');

//DIVS
var mobilesDIV=document.getElementById("mobilesDIV");
var storybooksDIV=document.getElementById("storybooksDIV");
//INFORMATION
var MOBILES=[
    {name:"Realme",price:10000},
    {name:"Samsung Galaxy",price:15000},
    {name:"Vivo",price:12000}
];
var STORYBOOKS=[
    {name:"Bed book",price:100},
    {name:"Charlottes-Web",price:150},
    {name:"Jungle Book",price:200},
    {name:"prevention-of-justice",price:250}
];
//HTML
function HTMLmobilesproduct(con){
    let URL=`../images/mobiles/mobiles${con}.jpg`;
    let btn=`btnMobiles${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <p class="card-text">${MOBILES[con-1].name}</p>
                    <p class="card-text">Price:${MOBILES[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${MOBILES[con-1].name}',
                            '${MOBILES[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary"><a
                            style="color:inherit;" href="/cart">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${MOBILES
                            [con-1].name}','${MOBILES[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary">Add to cart</button>
                        </div>
                        <small classs="text-muted">Free Shipping</small>
                    </div>
                </div>
            </div>
        </div>
    `
}

function HTMLstorybooksproduct(con){
    let URL=`../images/storybooks/storybooks${con}.jpg`;
    let btn=`btnStorybooks${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <i style="color:orange;" class="fa fa-star"></i>
                    <p class="card-text">${STORYBOOKS[con-1].name}</p>
                    <p class="card-text">Price:${STORYBOOKS[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${STORYBOOKS[con-1].name}',
                            '${STORYBOOKS[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary"><a
                            style="color:inherit;" href="/cart">Buy</a></button>
                            <button id="${btn}" type="button" onclick="cart('${STORYBOOKS
                            [con-1].name}','${STORYBOOKS[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary">Add to cart</button>
                        </div>
                        <small classs="text-muted">Free Shipping</small>
                    </div>
                </div>
            </div>
        </div>
    `
}
//ANIMATION
function animation(){
    const toast=swal.mixin({
        toast:true,
        position:'top-end',
        showConfirmButton:false,
        timer:1000
    });
    toast({
        type:'success',
        title:'Added to shopping cart'
    });
}
//CART FUNCTIONS
function cart(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage=JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
            products.push(item);
            localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products=JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animation();
}
function cart2(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage=JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
    products=JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart",JSON.stringify(products));
    }
    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display="none";
}

(()=>{
    for (let index = 1; index <=3; index++) {
        mobilesDIV.innerHTML += `${HTMLmobilesproduct(index)}`;
        
    }
    for (let index = 1; index <=4; index++) {
        storybooksDIV.innerHTML += `${HTMLstorybooksproduct(index)}`;        
    }
    if (localStorage.getItem("cart")==null) {
        
    } else {
        products=JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }
})();