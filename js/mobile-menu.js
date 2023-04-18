(function($) {
$.fn.menumaker = function(options) {  
	var cssmenu = $(this), settings = $.extend({
		format: "dropdown",
		sticky: false
	}, options);
	return this.each(function(){
		$(this).find(".button").on('click', function(){
			$(this).toggleClass('menu-opened');
			var mainmenu = $(this).next('ul');
			if (mainmenu.hasClass('open')) { 
				mainmenu.slideToggle().removeClass('open');
			} else {
       			mainmenu.slideToggle().addClass('open');
       			if (settings.format === "dropdown") {
         			mainmenu.find('ul').show();
       			}
     		}
   		});
   		cssmenu.find('li ul').parent().addClass('has-sub');
		multiTg = function() {
			//cssmenu.find("li.has-sub > a").append('<span class="submenu-button"></span>');
     		cssmenu.find("li.has-sub > a").append('<span class="submenu-button"></span><span class="submenu-icon"></span>');
			cssmenu.find("li.has-sub > a").attr('href','javascript:void(0)');
     		cssmenu.find('.submenu-button').on('click', function() {
       			$(this).toggleClass('submenu-opened');
       			if ($(this).parent().siblings('ul').hasClass('open')) {
         			$(this).parent().siblings('ul').removeClass('open').slideToggle();
       			} else {
         			$(this).parent().siblings('ul').addClass('open').slideToggle();
       			}
				if ($(this).siblings('.submenu-icon').hasClass('submenu-opened')) {
					$(this).siblings('.submenu-icon').removeClass('submenu-opened');
				} else {
         			$(this).siblings('.submenu-icon').addClass('submenu-opened');
       			}
     		});
	};
	if (settings.format === 'multitoggle') multiTg();
	else cssmenu.addClass('dropdown');
	if (settings.sticky === true) cssmenu.css('position', 'fixed');
	$('.submenu-button').click(function(event){
		event.preventDefault().parent();
	});
	resizeFix = function() {
		var mediasize = 767;
			if ($( window ).width() > mediasize) {
				cssmenu.find('ul').show();
			}
		};
		resizeFix();
			return $(window).on('resize', resizeFix);
			});
		};
	})(jQuery);

(function($){
	$(document).ready(function(){
		$("#cssmenu").menumaker({
			format: "multitoggle"
		});
	});
})(jQuery);

jQuery(document).ready(function() {
	var divheight = jQuery(window).height()-80;
	jQuery('#cssmenu ul.ul-height').css('height', divheight);
});