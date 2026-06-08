$(document).ready(function () {
    // ================================++++++++++++++++++++====================
    // home page code starts here
    if ($('.promoSlider').length) {
        $('.promoSlider').owlCarousel({
            loop: false,
            margin: 20,
            nav: true,
            navText: ['<img src="./assets/images/home/left-arrow.svg" alt="prev"/>', '<img src="./assets/images/home/right-arrow.svg" alt="next"/>'],
            dots: true,
            smartSpeed: 600,
            center: true,
            slideBy: 1,
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 1,
                },
                1000: {
                    items: 1,
                }
            },
        });
    }



    // home page code ends here
    // ================================++++++++++++++++++++====================
})