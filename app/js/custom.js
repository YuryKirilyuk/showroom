$(function(){


    $('.main-slider').slick({
        dots: true,
        //infinite: false,
        speed: 400,
        //fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }/*,
            {
                breakpoint: 600,
                settings: "unslick"
            }*/
        ]
    });

    $('.community-slider').slick({
        dots: false,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: false,
        arrows: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            }/*,
            {
                breakpoint: 600,
                settings: "unslick"
            }*/
        ]
    });




    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 325,
        gutter: 20,
        fitWidth: true
    });



});

