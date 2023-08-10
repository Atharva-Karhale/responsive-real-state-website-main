/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrolllHeader(){
    const header = document.getElementById('header')
    
        if(window.scrollY >= 50) {
            header.classList.add('scroll-header')
        }
        else {
            header.classList.remove('scroll-header')
        }
    
}
window.addEventListener('scroll', scrolllHeader)

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPreView: 'auto',
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/*=============== VALUE ACCORDION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
