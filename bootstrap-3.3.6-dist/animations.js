$(document).ready(function() {
  $('.userpetanimations').hide();
  $('.header').hide();
  $('.header').fadeIn(3000);
  $('.up').click(function() {
    $('.up').animate({width: "20px"}, 500)
    $('.up').animate({width: "200px"}, 1000)
  });

  $('.down').click(function() {
    $('.down').animate({width: "20px"}, 500)
    $('.down').animate({width: "200px"}, 1000)
  });
  $('.userpetanimations').fadeIn(3000);
});
