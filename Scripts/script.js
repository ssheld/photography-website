


/* variable to keep track of toggle state of hamburger menu */
var mobileToggleState = 0;
$(document).ready(function(){
    
    /* Code for hamburger menu */
	$('a.target-burger').click(function(e){
        $('div.mobile-nav, a.target-burger').toggleClass('toggled');
        e.preventDefault();
        if ( $('.mobile-nav').is(":visible") && mobileToggleState == 1){
            $('.mobile-nav').css('visibility', 'hidden');
            $('.mobile-nav').css('height', '0');
            mobileToggleState = 0;

            /* Add scroll bar back to body */
            $('body').css('overflow-y', 'auto');
            
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
                $('body').css('overflow-y', 'auto');
            }
            if($('a.target-burger').is('visible')){
                $('a.target-burger').toggleClass('toggled');
            }
        }
    });
});