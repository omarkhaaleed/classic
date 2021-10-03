// $('nav button ').click(function() {
//     $('nav ul li ').slideToggle()
// })

var myheader = $('.header')
myheader.height($(window).height());

$(window).resize(function() {

    myheader.height($(window).height());
})



//remoce class active and add when i selct anothersiblings


$('nav ul li').click(function() {

    $(this).addClass('active').siblings().removeClass('active');
})




$(window).scroll(function() {
    var sc = $(this).scrollTop();

    if (sc > 300) {

        $('nav').addClass('navtest')

    } else {
        $('nav').removeClass('navtest')
    }
})



// owl carsor


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: true,
            loop: false
        }
    }
})


$('nav ul li a').click(function() {

    $('body,html').animate({

        scrollTop: $('#' + $(this).data('value')).offset().top()

    });



})


// slide auuuto testimonials 


(function autoslider() {

    $('.testim_slider .active').each(function() {

        if (!$(this).is(':last-child')) {

            $(this).delay(2000).fadeOut(1000, function() {

                $(this).removeClass('active').next().addClass('active').fadeIn();

                autoslider();
            })



        } else {
            $(this).delay(2000).fadeOut(1000, function() {

                $(this).removeClass('active');

                $('.testim_slider > div').eq(0).addClass('active').fadeIn()

                autoslider();
            });

        }



    })
}());

// when i click the button remove class  selected and add to the siblings


$('.project .project_button button').click(function() {

    $(this).removeClass('selected').addClass('selected').siblings().removeClass('selected');
})



// mixit up for project 

// (function() {
//     $('#Container').mixItUp();
// }());

// $(function() {
//     $('#Container').mixItUp();
// });