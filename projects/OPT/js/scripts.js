$(document).ready(function(){

	// _________SLICK_________
	$('.customers__carousel').slick({
		prevArrow: '<button type="button" class="slick-prev"><img src="../../../projects/OPT/icons/slider/arrow_left.png" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../../../projects/OPT/icons/slider/arrow_right.png" alt=""></button>',
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 800,
		variableWidth: true,
		centerMode: true,
		slidesToShow: 3,
		responsive: [
			{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				slidesToShow: 3,
				dots: true
			}
			},
			{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				slidesToShow: 1,
				dots: true
			}
			}
		]
	});

	// __________HAMBURGER__________
	window.addEventListener('DOMContentLoaded', () => {
		const menu = document.querySelector('.mini'),
		menuItem = document.querySelectorAll('.menu_item'),
		hamburger = document.querySelector('.hamburger');
	
		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('mini_active');
		});
	
		menuItem.forEach(item => {
			item.addEventListener('click', () => {
				hamburger.classList.toggle('hamburger_active');
				menu.classList.toggle('menu_active');
			})
		})
	})

	// __________Scroll__________
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.arrow').fadeIn();
        } else {
            $('.arrow').fadeOut();
        }
    });

    $('a[href^="#"]').bind("click", function(e){
        const anchor = $(this);
        $('html, body').stop().animate({
         scrollTop: $(anchor.attr("href")).offset().top
        }, 1000);
        e.preventDefault();
    });
});
	