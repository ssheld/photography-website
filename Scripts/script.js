

$(window).on('load', function() {    
    /* Polyfill featured image so object-fit works with IE */
    var featuredImg = document.querySelector('#featured-gallery-image');
    objectFitImages(featuredImg);

    var galleryImgs = document.querySelectorAll('.card img');
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
    scrollbar: {
        hide: false,
        grabCursor: true,
    },
    on: {
        init: function (){
            console.log("INITIALIZED");
        },
        reachEnd: function (){
            console.log("AT END OF SWIPER");
            mySwiper.update();
        },
        scroll: function (){
            console.log("scrolling");
        },
        resize: function (){
            console.log("RESIZING");
        }
    }
};

/* variable to keep track of toggle state of hamburger menu */
var mobileToggleState = 0;
$(document).ready(function(){

    mySwiper = new Swiper('.swiper-container', defaultSwiper);
    mySwiper.mousewheel.enable();

    /* If window is resized then we need to update the swiper */
    /* container so that it is the correct size NOT WORKING IN IE AND DONT THINK IT"S WORKING CORRECTLY IN SAFARI */
    $(window).resize(function(){
        mySwiper.update();
    });

    /* Change Featured Story image based on click */
    $('.card img').click(function(){
        /* Change featured gallery image to that of image clicked */
        document.getElementById("featured-gallery-image").src = this.src;
        /* Change featured gallery title to that of image clicked */
        $('.featured-gallery-title').text($(this).attr('title'));    
    });



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



