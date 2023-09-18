//   <!-- start hero sec -->

const cards = document.querySelectorAll('.offer .card');
cards[0].classList.add("bigCard")
function toggelLarge(clickedCard) {

    cards.forEach(function(card) {
        card.classList.remove('bigCard');
    });

    clickedCard.classList.add('bigCard');
}
//   <!-- end hero sec -->

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

// onscrol header 
const GoUp = document.querySelector(`.goup`);

addEventListener("scroll" , _=>{
    const header = document.querySelector(` nav`);
    header.classList.toggle("sticky" , window.scrollY > 40);
    // goup btn 
    if (scrollY > 100) {
        GoUp.classList.remove(`d-none`);
    } else {
        GoUp.classList.add(`d-none`);
    }
}
)



