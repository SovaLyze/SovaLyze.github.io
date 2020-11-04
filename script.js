$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 300) {
            $('.scroll-up-btn').addClass("show");
        }else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    
    $('.menu-btn').click(function() {
       $('.navbar .menu').toggleClass("active"); 
       $('.menu-btn i').toggleClass("active"); 
    });
    
    $('.carousel').owlCarousel ({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false 
            },
            600: {
                items: 2,
                nav: false 
            },
            1000: {
                items: 3,
                nav: false 
            }                    
        }
    });
    
    var typed = new Typed(".typing", {
       strings: ["a Junior Java Developer.", "a Gamer.", "an Engineer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    var typed = new Typed(".typing-2", {
       strings: ["a Developer.", "a Gamer.", "an Introvert."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});