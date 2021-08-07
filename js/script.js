window.addEventListener('DOMContentLoaded', function(){
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.navigation');
    const navItem = document.querySelectorAll('.navigation a');

    menuBtn.addEventListener('click', () =>{
        menuBtn.classList.toggle('active');
        nav.classList.toggle('active');
    })


})

var slideIndex=1;
showSlides(slideIndex);
function plusSlides(n){
    showSlides(slideIndex+=n);
}

function currentSlide(n){
    showSlides(slideIndex=n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');

    if(n>slides.length){
        slideIndex=1;
    }
    if(n<1){
        slideIndex=slides.length;
    }
    for(i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }

    for(i=0; i<dots.length; i++){
        dots[i].className=dots[i].className.replace('active', '');

    }

    slides[slideIndex-1].style.display='block';
    dots[slideIndex+2].className +="active";
}