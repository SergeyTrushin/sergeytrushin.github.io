import "./css/style.less";




const ageOnPage = document.querySelector("#age")



//Дата рождения

let dob = new Date(1995, 12 - 1, 17);
let now = new Date(); //Текущя дата
let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); 
let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); 

let age = today.getFullYear() - dob.getFullYear();
if (today < dobnow) {
	age = age-1;
}

ageOnPage.innerHTML = age;

const swiper = new Swiper('.swiper-container', {
  wrapperClass: 'swiper-wrapper',
  slideClass: 'swiper-slide',
  loop: false,
  speed: 600,
  observer: true,
  observeParents: true,
  parallax:true,
  watchOverflow: true,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  pagination: {
    el: '.slider-dots',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
  	1150: {
  		slidesPerView: 4,
  		spaceBetween: 25,
      slidesPerGroup: 1,
  	},
  	1024: {
  		slidesPerView: 2,
  		spaceBetween: 50,
      slidesPerGroup: 1,
  	},
  	768: {
  		slidesPerView: 2,
  		spaceBetween: 40,
      slidesPerGroup: 1,
  	},
    0: {
  		slidesPerView: 2,
  		spaceBetween: 5,
      slidesPerGroup: 1,
  	},
  },
})