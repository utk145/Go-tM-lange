const navCloseEle = document.querySelector(".nav__close");
const navIconEle = document.querySelector(".nav__icon");
const navList = document.querySelector(".nav__list");
const navbgOverLay = document.querySelector(".nav__bgOverlay");

const navOpen = ()=>{
    navList.classList.add("show");
    navbgOverLay.classList.add("active");
    document.body.style = 'visibility: visible; height: 100vh; width:100vw; overflow : hidden;';   
}


const navClose = ()=>{
    navList.classList.remove("show");
    navbgOverLay.classList.remove("active")
    document.body.style='visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}

navIconEle.addEventListener("click",navOpen);
navCloseEle.addEventListener("click",navClose);
navbgOverLay.addEventListener("click",navClose);



// AOS
AOS.init({
    offset:200,
    delay:100,
    duration:400,
    easing:'ease',
    once:false,
    mirror:false,
    anchorPlacement:'top-bottom'
});
