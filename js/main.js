


$(function () {
    // lightbox settings
    lightbox.option({
        positionFromTop: 200,
    });

    // setup swiper
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        
        pagination: {
            el: '.swiper-pagination',
        },

        autoplay: {
            delay: 3000,
        },
    });

    // setup scroll to top button
    $('.toTop').click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0}, 750);
    });
});
