$(function () {
    // lightbox settings
    lightbox.option({
        positionFromTop: 200,
    });

    // swiper settings
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,

        pagination: {
            el: '.swiper-pagination',
        },

        autoplay: {
            delay: 3000,
        },
    });

    // setup prodList menu
    // $(".prodListButton").click(
    //     function(event) {
    //         event.preventDefault();
    //         $(".prodList").toggleClass("active");
    //     }
    // );
});
