var main = function() {
  $('.day').click(function(){
    $(this).next('.hourly').toggle();
    $(this).find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
  });
};

$(document).ready(main);