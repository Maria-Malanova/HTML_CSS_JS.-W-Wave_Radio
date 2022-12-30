var butn = document.querySelector('.nav1__svg');
 butn.addEventListener('click', function(){
  document.querySelector('.nav1__searchtext').style.display = "block";
  document.querySelector('.nav1__border').style.display = "block";
  document.querySelector('.nav1__exit').style.display = "block";
  document.querySelector('.nav1__search').style.display = "none";
  });
var exit = document.querySelector('.nav1__exit');
exit.addEventListener('click', function() {
  document.querySelector('.nav1__searchtext').style.display = "none";
  document.querySelector('.nav1__border').style.display = "none";
  document.querySelector('.nav1__exit').style.display = "none";
  document.querySelector('.nav1__search').style.display = "block";
});



var block = document.querySelector('.podcasts__button');
var open = document.querySelectorAll('.podcasts__block');
block.addEventListener('click', function() {
    open.forEach(el => {
      el.style.display = "block";
  });
  block.style.display = "none";
});



const accordion = document.querySelectorAll(".accordion"); 
accordion.forEach((accordion) => {
  accordion.addEventListener("click", boxHandler); 
});
function boxHandler(e) {
  let currentBox = e.target.closest(".accordion"); 
  let currentContent = e.target.nextElementSibling; 
  currentBox.classList.toggle("active"); 
  if (currentBox.classList.contains("active")) {
    currentContent.style.maxHeight = currentContent.scrollHeight + "px";
  } else {
    currentContent.style.maxHeight = 0; 
  }
};



var button = document.querySelector('.nav1__button');
const body = document.body;
button.addEventListener('click', function() {
  document.querySelector('.media-modalCont').style.display = "block";
  body.classList.add('dissable-scroll');
})
var buttonCloze = document.querySelector('.media-modalCloze');
buttonCloze.addEventListener('click', function() {
  document.querySelector('.media-modalCont').style.display = "none";
  body.classList.remove('dissable-scroll');
})

var button = document.querySelector('.media-button1');
button.addEventListener('click', function() {
  document.querySelector('.media-modalCont').style.display = "block";
  body.classList.add('dissable-scroll');
})
var buttonCloze = document.querySelector('.media-modalCloze');
buttonCloze.addEventListener('click', function() {
  document.querySelector('.media-modalCont').style.display = "none";
  body.classList.remove('dissable-scroll');
})




var burgerOpen = document.querySelector('.nav1__burger');
var burgerCloze = document.querySelector('.media-burgerClozet');
burgerOpen.addEventListener('click', function() {
  document.querySelector('.media-burgerOpen').style.display = "block";
  document.querySelector('.nav1').style.display = "none";
})
burgerCloze.addEventListener('click', function() {
  document.querySelector('.media-burgerOpen').style.display = "none";
  document.querySelector('.nav1').style.display = "block";
})



var nav3 = document.querySelector('.nav3__pluss');
nav3.addEventListener('click', function() {
  document.querySelector('.nav3').classList.toggle("active");
  var openbox = document.querySelector('.nav3');
  var nav3Boxer = document.querySelector('.nav3__boxer1');
  if (openbox.classList.contains("active")) {
    nav3Boxer.style.display = "block";
  } else {
    nav3Boxer.style.display = "none"; 
  }
})



const select = document.querySelector('.custom-select');
const choices = new Choices(select, {
  itemSelectText: '',
  position: 'bottom',
  searchEnabled: false,
  shouldSort: false,
});



var chekboxer = document.querySelector('.about__chekboxer');
chekboxer.addEventListener('click', function() { 
  if (document.querySelector('.about__chek').style.display = "none") {
    document.querySelector('.about__chek').style.display = "block";
  }
  else {
    document.querySelector('.about__chek').style.display = "none"
  }
})


/*
var swiperPrev = document.querySelector('.swiper-button-prev');
var swiperNext = document.querySelector('.swiper-button-next');
var polosa = document.querySelector('.swiper-wrapper');
  let left = 0;
  let right = -570;
swiperPrev.addEventListener('click', function() {
  left = left - 285;
  if (left < -570) {
  left = 0
  }
  polosa.style.left = left + "px";
})
swiperNext.addEventListener('click', function() {
  right = right + 285;
  if (right > 0) {
    right = -570
  }
  polosa.style.right = right + "px";
})*/


const swiper = new Swiper('.swiper', {
	slidesPerView: 2,
	slidesPerGroup: 2,
	spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30
    }
  }
});



let tabsBtn = document.querySelectorAll('.guests__Autor');
let tabsItem = document.querySelectorAll('.tabs-item');
tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    tabsBtn.forEach(function(btn){ btn.classList.remove('guests__AutorBtn--active')});
    e.currentTarget.classList.add('guests__AutorBtn--active');
    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});



let validator = new JustValidate('form');
validator.addField("#name", [
  {
    rule: 'required',
    errorMessage: 'Ошибка',
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Минимум 2 символа'
  },
])
.addField("#email", [
  {
    rule: 'required',
    errorMessage: 'Ошибка'
  },
  {
    rule: 'email',
    errorMessage: 'Ошибка в адресе'
  }
])