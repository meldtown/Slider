

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

 	function slideToLeft(e) {
 		if (currentSlide === 6) return;
		currentSlide++; 		
 		slideWrapper.stop().animate({'marginLeft': '-=' + slideWidthPercentFormatted + '%'});	
 	}

 	function slideToRight(e) {
 		if (currentSlide === 1) return;
		currentSlide--; 		
 		slideWrapper.stop().animate({'marginLeft': '+=' + slideWidthPercentFormatted + '%'});
 	}

 	leftButton.click(slideToLeft);
 	rightButton.click(slideToRight);









