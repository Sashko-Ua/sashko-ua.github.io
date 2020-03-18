// ---------- HAMBURGER ----------
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('menu__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('menu__active');
        })
    })
})



$(document).ready(function(){
    // ---------- OWL-CAROUSEL ----------
	$(".owl-carousel").owlCarousel({
	items: 1,
	loop: true,
	dotsEach: true,
	smartSpeed: 1000,
    });
    

    // ---------- TABS ----------
    function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.education__click').eq(i).toggleClass('education__click_active');
				$('.education__certificate').eq(i).toggleClass('education__certificate_active');
			})
		});
	};

	toggleSlide('.next')
    toggleSlide('.back')
 });

 


 