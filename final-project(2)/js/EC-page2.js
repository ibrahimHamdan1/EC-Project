// show and hide password 

let 
    password = document.getElementById(`password`),
    togglePasswor = document.getElementsByClassName(`show`);

    function showHide(){
        if(password.type === `password`){
            password.setAttribute(`type` , `text`);
        }else
        {
            password.setAttribute(`type` , `password`); 
        }
    }


// increase and decreas number in shap sec

const
min = document.querySelector(".control .min"),
number = document.querySelector(".control .num"),
plusEl = document.querySelector(".control .plus");


plusEl.addEventListener("click" ,
function() {
    number.innerText = (+number.innerText) +  1
})

min.addEventListener("click" ,
function() {
    if ((+number.innerText) != 1) {
    number.innerText = (+number.innerText) - 1
}
})

// choose imge product in shap sec 

const 
    imgSmall = document.querySelectorAll(`.small-img img`),
    imgBid = document.querySelector(`.big-img img`);
    
    for (let i = 0; i < imgSmall.length ; i++){
    imgSmall[i].addEventListener("click" ,
    function(){
        imgBid.src = imgSmall[i].src;
        imgBid.className =imgSmall[i].className;

})}

// choose color product in shap sec
const
colorAll = document.querySelectorAll(`.colors .color`) ,
slideColor = document.querySelectorAll(`.carousel-indicators button`),
imgColor= document.querySelectorAll(`.carousel-item`);

    colorAll[0].addEventListener("click" ,
        function(){
            imgBid.src =imgSmall[1].src;
            imgBid.className =imgSmall[1].className; 
            for (let i = 0; i < slideColor.length; i++) {
                slideColor[i].classList.remove(`active`)
                slideColor[1].classList.add(`active`)
            }
            for (let i = 0; i < slideColor.length; i++) {
                imgColor[i].classList.remove(`active`)
                imgColor[1].classList.add(`active`)
            }

        })
    colorAll[1].addEventListener("click" ,
        function(){
            imgBid.src =imgSmall[2].src;
            imgBid.className =imgSmall[2].className;
            for (let i = 0; i < slideColor.length; i++) {
                slideColor[i].classList.remove(`active`)
                slideColor[2].classList.add(`active`)
            }
            for (let i = 0; i < slideColor.length; i++) {
                imgColor[i].classList.remove(`active`)
                imgColor[2].classList.add(`active`)
            }

        })
    colorAll[2].addEventListener("click" ,
        function(){
            imgBid.src =imgSmall[3].src;
            imgBid.className =imgSmall[3].className;
            for (let i = 0; i < slideColor.length; i++) {
                slideColor[i].classList.remove(`active`)
                slideColor[3].classList.add(`active`)
            }
            for (let i = 0; i < slideColor.length; i++) {
                imgColor[i].classList.remove(`active`)
                imgColor[3].classList.add(`active`)
            }

            })
    colorAll[3].addEventListener("click" ,
        function(){
            imgBid.src =imgSmall[0].src;
            imgBid.className =imgSmall[0].className;
            for (let i = 0; i < slideColor.length; i++) {
                slideColor[i].classList.remove(`active`)
                slideColor[0].classList.add(`active`)
            }
            for (let i = 0; i < slideColor.length; i++) {
                imgColor[i].classList.remove(`active`)
                imgColor[0].classList.add(`active`)
            } 
        })


//start product 

const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
    clickable: true,
    },
    breakpoints: {
    640: {
        slidesPerView: 2,
        spaceBetween: 40,
    },
    992: {
        slidesPerView: 3,
        spaceBetween: 80,
    },
    1200: {
        slidesPerView: 4,
        spaceBetween: 90,
    },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
swiperEl.initialize();


//----------------- CART ----------
4
const addProductBtn = document.querySelector(`.addCart`),
    cartlist = document.querySelector(`#cart .cartbody`),
    totalCost = document.querySelector(` .total .cost`),
    productCount = document.querySelector(`.number`);
    // console.log(productCount );


let Productlist = JSON.parse(localStorage.getItem("product list")) || [] ;


addProductBtn.onclick = event =>{
    event.preventDefault()
    collectData(addProductBtn);
}

function collectData(item) {
    let ProductOpject = {}
    let product = item.parentElement.parentElement.parentElement.parentElement
    let imgProductSrc = product.querySelector(`.bigbox img`).src
    let nameProduct = product.querySelector(`.name-product`).innerText
    let idProduct = product.querySelector(`.id span`).innerText
    let colorProduct = product.querySelector(`.bigbox img`).className
    let priceProduct = product.querySelector(`.red .price`).innerText
    let contProduct = product.querySelector(`.control .num`).innerText
    let selectElement = product.querySelector(`.selectSize`) ;
    let sizeProduct= selectElement.options[selectElement.selectedIndex].innerText;
    let messeg = product.querySelector(`.meseg`) ;




    if (sizeProduct === "CHOOSE SIZE") {
        messeg.innerText = "Please choose size ." ; 
    } else {
        ProductOpject.img = imgProductSrc
        ProductOpject.name = nameProduct
        ProductOpject.id = idProduct
        ProductOpject.color = colorProduct
        ProductOpject.price = priceProduct
        ProductOpject.cont = contProduct
        ProductOpject.size = sizeProduct 
        Productlist.push(ProductOpject)
        messeg.innerText = "" ; 
    }
    
    localStorage.setItem("product list" , JSON.stringify(Productlist))
    showProduct()
}
showProduct()
function showProduct() {
    let totalSum = 0
    cartlist.innerHTML = " "
    Productlist.forEach((product , ind) => {
        let totalOneProduct = product.price * product.cont
        let productViwe = ` 
        <div class="col col-sm-3 col-md-4 ">
        
            <div class="product">
                <div class="product-img">
                    <img src="${product.img}" alt="">
                </div>
                <div class="product-name">
                    <p class="name">${product.name}</p>
                    <p class="id"># <span class="num">${product.id}</span></p>
                </div>
            </div>
        </div>

        <div class="col col-lg-1">
            
            <div class="color">
                <p>${product.color}</p>
            </div>
        </div>
        <div class="col col-lg-1">
            
            <div class="Size">
                <p>${product.size}</p>
            </div>
        </div>
        <div class="col col-lg-2">
        <div class="coun">
            <div class="numb">
            <span class="minEl">-</span>
            <span class="numEl">${product.cont}</span>
            <span class="plusEl">+</span>
            </div>
        </div>
        </div>
        <div class="col col-sm-2  col-lg-3 ">

            <div class="Price">
                <p>$ ${(product.price * product.cont).toFixed(2) }</p>
            </div>
        </div>
        <div class="col ">
            
            <button class="btn btn-close" id="delete" data-id= "${ind}"></button>
        </div>

</div>`
    
    cartlist.innerHTML += productViwe
    totalSum += totalOneProduct
    
});
totalCost.innerText = totalSum.toFixed(2)
productCount.innerText =  Productlist.length

}



// delete one product

addEventListener("click" , event => {
    if (event.target.id == "delete") {
        let idd = event.target.getAttribute("data-id")
        Productlist.splice(idd , 1)
        localStorage.setItem("product list" , JSON.stringify(Productlist))
        showProduct()
    }
}
)


// goup btn 
const GoUp = document.querySelector(`.goup`);

addEventListener("scroll" , _=>{
    if (scrollY > 100) {
        GoUp.classList.remove(`d-none`);
    } else {
        GoUp.classList.add(`d-none`);
    }
}
)