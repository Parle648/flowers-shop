let headerLocation = document.querySelector('.header-location');
let bodyLocation = document.querySelector('.body-choise-location');
const arrowLocation = document.querySelector('.arrow');

let navSelects = document.querySelectorAll('.header-nav-select');
const arrowNavSelect = document.querySelectorAll('.arrow2');

let langSelect = document.querySelector('.header-language');
let phoneSelect = document.querySelector('.header-phone');

function ShowSelects(elem){
    elem.onclick = function(){
        elem.lastElementChild.lastElementChild.classList.toggle('arrow2-active');
        elem.parentNode.lastElementChild.classList.toggle('active-location')
    }
}

ShowSelects(headerLocation);

navSelects.forEach(ShowSelects);

ShowSelects(langSelect);

ShowSelects(phoneSelect);
// main slider
const sliderDots = document.querySelectorAll('.dots');
const sliderBacground = document.querySelectorAll('.background-title');

sliderDots.forEach(changeSliderDots);

function changeSliderDots(el){
    el.onclick = function(){
        sliderDots.forEach(function(el){
            el.classList.remove('active');
        })
        el.classList.add('active');

        sliderBacground.forEach((element) => {
            element.classList.remove('active-background');
            if(element.getAttribute('data-number') === el.getAttribute('data-number')){
                element.classList.add('active-background');
            }
        })
    };
}

setInterval(changeBacground, 10000);

function changeBacground(){
    let activeSlide = document.querySelector('.active-background'),
        activeDot = document.querySelector('.active');

    changeClass(activeSlide, 'active-background');
    changeClass(activeDot, 'active');

    if(activeSlide.getAttribute('data-number') === 'five'){
        sliderBacground.forEach(function(el){
            el.classList.remove('active-background');
            if(el.getAttribute('data-number') === 'one'){
                el.classList.add('active-background')
            }
        })
        sliderDots.forEach(function(el){
            el.classList.remove('active')
            if(el.getAttribute('data-number') === 'one'){
                el.classList.add('active')
            }
        })
    }
}

function changeClass(activeElem, classes){
    activeElem.classList.remove(classes);
    activeElem.nextElementSibling.classList.add(classes);
}