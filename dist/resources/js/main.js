//get current full year
$('#year').text(new Date().getFullYear());

//Configure Carousel properties
$('.carousel').carousel({
    interval: 6000,
    pause: 'hover'
});

//videoPlay
$(function(){
    //Auto Play Modal Video
    $('.video').click(function(){
        let theModal = $(this).data('target'),
        videoSRC = $(this).attr('data-video'),
        videoSRCauto = videoSRC + '?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1';
        $(theModal + 'iframe').attr('src',videoSRCauto);
        $(theModal + 'button.close').click(function(){
            $(theModal + 'iframe').attr('src', videoSRC);
        });
    });
});