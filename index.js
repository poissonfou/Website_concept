'use strict'

let Slider = function () {
    let slider, slideList

    let count = 1; 

    slider = document.getElementById("slider");
    slideList = document.getElementById("imgs");

    let sliderHeight = slider.offsetHeight;

    let items = slideList.querySelectorAll("li").length;

    window.addEventListener('resize', function () {
        sliderHeight = slider.offsetHeight;
    });

    let nextSlide = function () {
        if (count < items) {
            slideList.style.marginTop = "-" + count * 0.9999 * sliderHeight + "px";
            count++;
        }
        else if (count = items) {
            slideList.style.marginTop = "0px";
            count = 1;
        }
    };

    setInterval(function () {
        nextSlide()
    }, 7000);

};


window.onload = function () {
    Slider();
}

let loadText = function (){
    let y = window.pageYOffset;
    
    if(y >= 1000){
        let h2 = document.querySelector('.h2');
        h2.classList.remove('hidden');
    }
}

window.addEventListener('scroll', loadText);