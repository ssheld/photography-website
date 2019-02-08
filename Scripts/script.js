


$(window).on('load', function() {    
    /* Polyfill featured image so object-fit works with IE */
    var featuredImg = document.querySelector('#featured-gallery-image');
    objectFitImages(featuredImg);
    /* Polyfill nav images so object-fit works with IE */
    var galleryImgs = document.querySelectorAll('.gallery-nav-item img');
    objectFitImages(galleryImgs);

});

var defaultSwiper = {
    direction: 'horizontal',
    speed: 900,
    effect: 'slide',
    freeMode: true,
    freeModeMomentum: true,
    mousewheelControl: true,
    slidesPerView: 'auto',
    preventClicks: false,
    freeModeMomentumBounce: false,
    // preventClicks: false,
    /* Necessary to prevent clicking on nav image from redirecting url */
    watchOverflow: true,
    preventClicksPropagation: false,
    scrollbar: {
        hide: false,
        grabCursor: true,
    },
    on: {
        init: function (){
        },
        reachEnd: function (){
        },
        scroll: function (){
            mySwiper.update();
        },
        resize: function (){
        }
    }
};

/* variable to keep track of toggle state of hamburger menu */
var mobileToggleState = 0;
$(document).ready(function(){
    
    /* Check if we're on the landing page */
    if (window.location.pathname == '/' ){

        mySwiper = new Swiper('.swiper-container', defaultSwiper);
        mySwiper.mousewheel.enable();
        /* If window is resized then we need to update the swiper */
        /* container so that it is the correct size NOT WORKING IN IE AND DONT THINK IT"S WORKING CORRECTLY IN SAFARI */
        $(window).resize(function(){
            mySwiper.update();
        });

        /* Change Featured Story image based on click */
        $('.gallery-nav-item > a').click(function(e){
            /* Prevent click from opening up the gallery */
            e.preventDefault();

            /* Change featured gallery image to that of image clicked */
            document.getElementById('featured-gallery-image').src = $(this).children('img').attr('src');

            /* Change the view gallery link */
            document.getElementById('view-gallery-btn').href = $(this).attr('href');

            /* Change featured gallery title to that of image clicked */
            $('#featured-gallery-title').text($(this).attr('title'));       
        });

    }
    else {
        /* Make our fixed header transparent */
        $(".header").css('background-color', 'transparent');
    }

    /* Code for hamburger menu */
	$('a.target-burger').click(function(e){
        $('div.mobile-nav, a.target-burger').toggleClass('toggled');
        e.preventDefault();
        if ( $('.mobile-nav').is(":visible") && mobileToggleState == 1){
            $('.mobile-nav').css('visibility', 'hidden');
            $('.mobile-nav').css('height', '0');
            mobileToggleState = 0;

            /* Add scroll bar back to body */
            $('body').css('overflow', 'visible');
            
        }
        else{
            $('.mobile-nav').css('visibility', 'visible');
            $('.mobile-nav').css('height', '100%');
            mobileToggleState = 1;

            /* Remove scroll bar from body */
            $('body').css('overflow', 'hidden');
        }
    });
    

    /* If we resize the window larger than 800 px then toggle */
    /* the mobile nav menu off.                               */
    $(window).on('resize', function(){
        if($(window).width() > 800 ) {
            if ($('.mobile-nav').is(':visible') && mobileToggleState ==1){
                $('.mobile-nav').css('visibility', 'hidden');
                $('.mobile-nav').css('height', '0');
                mobileToggleState = 0;

                /* Toggle the hamburger menu */
                $('div.mobile-nav, a.target-burger').toggleClass('toggled');

                /* Add scroll bar back to body */
                $('body').css('overflow', 'visible');
            }
            if($('a.target-burger').is('visible')){
                $('a.target-burger').toggleClass('toggled');
            }
        }
    });
});