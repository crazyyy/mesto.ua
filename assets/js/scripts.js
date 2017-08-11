// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
if (typeof jQuery === 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');
}
// Place any jQuery/helper plugins in here.

$(function() {
  // set the same haight to aside and article
  // set submenu height
  var articleHeight = $('article').height();
  var asideHeight = $('aside').height();
  if (articleHeight > asideHeight) {
    $('aside').height(articleHeight);
    $('.aside-nav--submenu').height(articleHeight);
  } else {
    $('article').height(asideHeight);
    $('.aside-nav--submenu').height(articleHeight);
  }
  $('.aside-nav > ul > li > a').on('click', function(e) {
    console.log('click')
    if ($(this).parent().hasClass('aside-nav--active')) {
      $(this).parent().removeClass('aside-nav--active')
    } else if (!$(this).parent().hasClass('aside-nav--active') && $(this).parent().hasClass('aside-nav--haschild')) {
      $('.aside-nav--active').removeClass('aside-nav--active');
      $(this).parent().addClass('aside-nav--active')
    }

  })

});
