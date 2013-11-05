$(document).scroll(function() {
  // create a variable that captures the position of the scrolling window
  var scroll = $(window).scrollTop();

  // create variable for block element for caching
  var navBox = $('.nav-box');

  /*
    create variable that gets the margin of the block element
    and uses `parseInt` to get the raw integer
  */
  var navBoxMargin = parseInt(navBox.css('margin-top'));

  /*
    create variable that gets the top offset position of the `.wrapper` block
    subtracting the value of `navBoxMargin`
  */
  var wrapper = $('.wrapper').offset().top - navBoxMargin;

  // create variable that gets the top offset position of the `.wrapper` block
  var pos = navBox.offset().top;


  // Series of log events to track what is happening
  //console.log(scroll);
  //console.log(navBoxMargin);
  //console.log(wrapper);
  //console.log(upWrapper);
  //console.log(pos);
  //console.log('break');


  // if events that determines when to apply the `fixed` class
  if (scroll >= wrapper) {
    navBox.addClass('fixed');
  } else if (scroll <= wrapper){
    navBox.removeClass('fixed');
  }

});
