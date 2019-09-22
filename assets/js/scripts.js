$(document).ready(function() {
    /*
    $('.carousel').carousel({
        interval: false
    });
    */
   $('.nav-pills').on('click', 'li', function() {
       $(this).addClass('active').siblings().removeClass('active')
   })

   //TODO fix for the dropdown toggle
   $('.navbar-brand').on('click', function() {
       $('.nav li').removeClass('active');
       $('#nav-home').addClass('active');
   })
})