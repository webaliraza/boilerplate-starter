// Hamburger Menu
$(".mobile-nav-trigger").click(function(e){
    $(this).toggleClass('open');
    $('.site-nav').toggleClass('visible');
    e.stopPropagation;
});

// Sticky Header
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.site-header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.site-header').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.site-header').removeClass('nav-up');
        }
    }
    
    lastScrollTop = st;
}