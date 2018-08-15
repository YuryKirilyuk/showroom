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
        horizontalOrder: true,
        fitWidth: true
    });

    $('.has-tags').on('click', function(){
        $(this).parent().toggleClass('show-tags');
    });



});





window.onload = function(){
    var debug = /*true ||*/ false;
    var h = document.querySelector('.heart-wrapper');

    function toggleActivate(){
        h.classList.toggle('active');
    }

    if(!debug){
        h.addEventListener('click',function(){
            toggleActivate();
        },false);

        // setInterval(toggleActivate,1000);
    }else{
        var elts = Array.prototype.slice.call(h.querySelectorAll(':scope > *'),0);
        var activated = false;
        var animating = false;
        var count = 0;
        var step = 1000;

        function setAnim(state){
            elts.forEach(function(elt){
                elt.style.animationPlayState = state;
            });
        }

        h.addEventListener('click',function(){
            if (animating) return;
            if (count > 27) {
                h.classList.remove('active');
                count = 0;
                return;
            }
            if (!activated) h.classList.add('active') && (activated = true);

            console.log('Step : '+(++count));
            animating = true;

            setAnim('running');
            setTimeout(function(){
                setAnim('paused');
                animating = false;
            },step);
        },false);

        setAnim('paused');
        elts.forEach(function(elt){
            elt.style.animationDuration = step/1000*27+'s';
        });
    }

};

