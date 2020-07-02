// Make Event for Link
$('.page-scroll').on('click', function(e) {


    // Take the href
    const tujuan = $(this).attr('href');
    // Catch the Current Element
    const elemenTujuan = $(tujuan);


    // Change the scroll destination
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top-50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();


});

// Parallax

// Parallax for section About Me

$(window).on('load', function() {
    $('.pLeft').addClass('pReveal');
    $('.pRight').addClass('pReveal');
});

$(window).scroll(function() {
    const scrolling = $(this).scrollTop();
    
    // Parallax for Jumbotron

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ scrolling/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + scrolling/2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + scrolling/1.2 + '%)'
    });

    // Parallax for Portofolio

    if (scrolling > $('.portfolio').offset().top - 280) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('fade');
            },500 * (i+1));
        });
    }
});