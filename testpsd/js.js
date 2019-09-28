	(function($){
  	$(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.navigation').toggleClass('menu_state_open');
    });
  	});
	})(jQuery);