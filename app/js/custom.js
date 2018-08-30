var $grid;

jQuery(window).load(function() {
    $grid = jQuery('.grid').masonry({
        itemSelector: '.grid-item',
        gutter: 5,
        // transitionDuration: 0,
        horizontalOrder: true,
        fitWidth: true
    });
    jQuery('.grid').css('opacity', '1');
    jQuery('.grid-item').css('opacity', '1');

    $grid.imagesLoaded().progress(function() {
        $grid.masonry('layout');
    });
});


window.addEventListener("orientationchange", function() {
    location.reload();
}, false);



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



/*
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 325,
        gutter: 5,
        horizontalOrder: true,
        fitWidth: true
    });
*/
    $('.has-tags').on('click', function(){
        $(this).parent().toggleClass('show-tags');
    });

    $('.link-button').on('click', function(){
        $(this).parent().find('.url-link').toggleClass('show');
    });


    $('a.like-button').on('click', function() {
        $(this).toggleClass('liked');
    });

    $('.wear-icon').on('click', function() {
        $(this).toggleClass('active');
    });

    $('[data-user="logged"]').on('click', function() {
        $(this).parent().addClass('add-tag');
    });

    $("body").click(function(e) {
        if($(e.target).closest(".tag-container").length==0) $(".tag-container").removeClass('add-tag');
    });

});


$('.image').on('load', function() {
    //$(this).parents('.grid-item').css('opacity','1');
});


//opacity fo icon-wear (events page)
function set_opacity() {
    jQuery('.grid-item img').load(function(){
        jQuery(this).parents('.grid-item').addClass('visible');
    });
    jQuery('.icon-wear').each(function() {
        var num = jQuery(this).data('requests'),
            op = 1;
        if (num < 30) {
            op = .3;
        } else if (num >= 30 && num < 50) {
            op = .5;
        } else if (num >= 50 && num <= 99) {
            op = .7;
        }
        jQuery(this).css('opacity', op);
    });
}(function opacity() {
    set_opacity();
}());