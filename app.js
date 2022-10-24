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