const btn = document.querySelector('.burger');
const menu = document.querySelector('.header__box');
const body = document.querySelector('body');

btn.addEventListener('click', ()=>{
	btn.classList.toggle('burger--active');
	menu.classList.toggle('burger--active');
	body.classList.toggle('noscroll');
});

const swiper = new Swiper(".testimony__slider", {
	slidesPerView: 4,
  spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
    1025: {
      slidesPerView: 4,
      spaceBetween: 30
    },
		768: {
			slidesPerView: 3,
      spaceBetween: 10
		},
		576: {
			slidesPerView: 2,
      spaceBetween: 10
		},
		320: {
			slidesPerView: 1,
      spaceBetween: 10
		}
  }
});
