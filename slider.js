

var currentSlide = 1,
	slideCount = 3,
	slider = $('.slider'),
	sliderWidth = slider.width(),
 	slideElems = $('.slide'),
 	totalSlideCount = slideElems.length,
 	slideWidthPercent = (1 / slideCount).toFixed(4),
 	slideWidthPercentFormatted = slideWidthPercent * 100,
 	slideWrapper = $('.slide-wrapper'),
 	slideWrapperWidth = slideWrapper.width(totalSlideCount * 100 / slideCount + '%'),
 	slideElemsWidth,
	slideToggler = $('.slide-toggler'),
 	leftButton = $('.slide-left'),
 	rightButton = $('.slide-right');

 	slideWrapper.css('marginLeft', slideWidthPercentFormatted + '%');
 	slideElems.width((100 / totalSlideCount ) + '%');
 	slideElemWidth = $(slideElems[0]).width();


 	function relocateSlideToRight() {
 		$(slideElems[0]).appendTo(slideWrapper);
 		slideElems = $('.slide');
 	}

 	function relocateSlideToLeft() {
 		$(slideElems[totalSlideCount - 1]).prependTo(slideWrapper);
 		slideElems = $('.slide');
 	}

 	function getCurrentToggler(index) {
 		return [].filter.call(slideToggler, function (item) {
			return $(item).data('toggler-index') === index;
		}).shift();
	};

 	function slideToLeft() {
 		if (currentSlide === totalSlideCount) return;
		currentSlide++;
		var currentToggler = getCurrentToggler(currentSlide);
		slideToggler.removeClass('active-toggler');
		$(currentToggler).addClass('active-toggler');
 		slideWrapper.stop(false, true).animate({'marginLeft': '-=' + slideWidthPercentFormatted + '%'});
 	}

 	function slideToRight() {
 		if (currentSlide === 1) return;
		currentSlide--;
		var currentToggler = getCurrentToggler(currentSlide);
		slideToggler.removeClass('active-toggler');
		$(currentToggler).addClass('active-toggler');
 		slideWrapper.stop(false, true).animate({'marginLeft': '+=' + slideWidthPercentFormatted + '%'});
 	}

 	leftButton.click(slideToLeft);
 	rightButton.click(slideToRight);

	slideToggler.click(function () {
		var index = $(this).data('toggler-index'),
			diff = Math.abs(index - currentSlide);
		if (index === currentSlide) return;
		if (index > currentSlide) slideWrapper.stop(false, true).animate({'marginLeft': '-=' + diff * slideWidthPercentFormatted + '%'});
		if (index < currentSlide) slideWrapper.stop(false, true).animate({'marginLeft': '+=' + diff * slideWidthPercentFormatted + '%'});
		currentSlide = index;
		slideToggler.removeClass('active-toggler');
		$(this).addClass('active-toggler');
	});









