

$(document).ready(function(){
    
    /* Make our fixed header transparent */
    $('.header').css('background-color', 'rgb(17,17,17)');

    /* Initialize light gallery */
    $('#aniimated-thumbnails').lightGallery({
        mode: 'lg-slide',
        height: '100%',
        width: '100%',
        getCaptionFromTitleOrAlt: false,
        download: false,
        zoom: false,
        autoplay: false,
        progressBar: false,
        autoplayControls: false,
    
    });
    
});