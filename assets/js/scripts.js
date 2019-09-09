$(document).ready(function() {
    /*
    $('.carousel').carousel({
        interval: false
    });
    */
   $('.nav-pills').on('click', 'li', function() {
       $(this).addClass('active').siblings().removeClass('active')
   })

   $('.navbar-brand').on('click', function() {
       console.log('hi');
       //console.log($('nav-item', '#home'))
       $('.nav li').removeClass('active');
       $('#nav-home').addClass('active');
   })
})