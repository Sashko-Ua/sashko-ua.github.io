// __________HAMBURGER__________
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
    // __________OWL-CAROUSEL__________
	$(".owl-carousel").owlCarousel({
	items: 1,
	loop: true,
	dotsEach: true,
	smartSpeed: 1000,
    });
    

    // __________TABS__________
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


    // __________Scroll__________
    $('a[href^="#"]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
         scrollTop: $(anchor.attr("href")).offset().top
        }, 1000);
        e.preventDefault();
    });


    // __________Validation__________
    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "You forgot to enter your name!",
                    minlength: jQuery.validator.format("Is it realy your name?")
                  },
                phone: "You forgot to enter your phone number!",
                email: {
                  required: "You forgot to enter your email!",
                  email: "Sorry, this is not a real email..."
                }
            }
        });
    };

    validateForms('#form');

    $('input[name=phone]').mask("+38 (099) 99-99-999");


    // __________Fancybox__________
    $('[data-fancybox="gallery"]').fancybox({
        loop: true,
        toolbar: false,
        animationEffect: "zoom-in-out",
        transitionEffect: "tube",
        transitionDuration: 600,
    });
});