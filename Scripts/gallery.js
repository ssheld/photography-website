






$(document).ready(function(){
    
    /* Make our fixed header transparent */
    $('.header').css('background-color', 'rgb(17,17,17)');

    console.log("MAKING A NEW GALLERY");
    /* Initialize light gallery */
    $('#aniimated-thumbnails').lightGallery({
        mode: 'lg-slide',
        // cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        height: '100%',
        width: '100%',
        getCaptionFromTitleOrAlt: false,
        download: false,
        zoom: false,
        autoplay: false,
        progressBar: false,
        autoplayControls: false
        // Enable keyboard navigation
        // KeyPress: 'true',
        // thumbnail: 'true'
    });
    
});