
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
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
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


$(document).ready(function(){
    
    /* Pop up an alert window to let the user know that the page is currently under construction */
    // $.alert({
    //     title: 'Hi there!',
    //     content: 'My website is currently under construction. Please bare with me while development wraps up in the coming weeks. - Stephen',
    //     theme: 'dark',
    //     animationBounce: 2,
    //     useBootstrap: false,
    //     boxWidth: '200px',
    // });

    mySwiper = new Swiper('.swiper-container', defaultSwiper);
    mySwiper.mousewheel.enable();
    /* If window is resized then we need to update the swiper */
    /* container so that it is the correct size NOT WORKING IN IE AND DONT THINK IT"S WORKING CORRECTLY IN SAFARI */
    $(window).resize(function(){
        mySwiper.update();
    });

    /* Change Featured Story image based on click */
    $('.gallery-nav-item a').click(function(e){
        /* Prevent click from opening up the gallery */
        e.preventDefault();

        /* Change featured gallery image to that of image clicked */
        document.getElementById('featured-gallery-image').src = $(this).children('img').attr('src');

        /* Change the view gallery link */
        document.getElementById('view-gallery-btn').href = $(this).attr('href');

        /* Change featured gallery title to that of image clicked */
        $('#featured-gallery-title').text($(this).attr('title'));       
    });
});
