//get current full year
$('#year').text(new Date().getFullYear());

//Configure Carousel properties
$('.carousel').carousel({
    interval: 6000,
    pause: 'hover'
});