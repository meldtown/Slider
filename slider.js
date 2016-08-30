var currentSlide = 2,
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
	autoToggleId,
	slideToggler = $('.slide-toggler'),
 	leftButton = $('.slide-left'),
 	rightButton = $('.slide-right');

 	// slideWrapper.css('marginLeft', slideWidthPercentFormatted + '%'); - Initial shift
 	slideElems.width((100 / totalSlideCount ) + '%');
 	slideElemWidth = $(slideElems[0]).width();


 	// function relocateSlideToRight() {
 	// 	$(slideElems[0]).appendTo(slideWrapper);
 	// 	slideElems = $('.slide');
 	// }
     //
 	// function relocateSlideToLeft() {
 	// 	$(slideElems[totalSlideCount - 1]).prependTo(slideWrapper);
 	// 	slideElems = $('.slide');
 	// }

     //=====================================Arrow togglers========================================
 	function getCurrentToggler(index) {
 		return [].filter.call(slideToggler, function (item) {
			return $(item).data('toggler-index') === index;
		}).shift();
	};

	function leftSlideLogic() {
		slideWrapper.stop(false, true).animate({'marginLeft': '-=' + slideWidthPercentFormatted + '%'});
	}

	function rightSlideLogic() {
		slideWrapper.stop(false, true).animate({'marginLeft': '+=' + slideWidthPercentFormatted + '%'});
	}

 	function slideToLeft() {
 		if (currentSlide === totalSlideCount) return;
		currentSlide++;
		var currentToggler = getCurrentToggler(currentSlide);
		slideToggler.removeClass('active-toggler');
		$(currentToggler).addClass('active-toggler');
		leftSlideLogic();
 	}

 	function slideToRight() {
 		if (currentSlide === 1) return;
		currentSlide--;
		var currentToggler = getCurrentToggler(currentSlide);
		slideToggler.removeClass('active-toggler');
		$(currentToggler).addClass('active-toggler');
		rightSlideLogic();
 	}

 	leftButton.click(slideToLeft);
 	rightButton.click(slideToRight);

    //=========================================================================

    //=================================== Bottom togglers =====================
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

//=========================================================================

//============================== Autotoggler ==============================

function relocateSlide() {
    $(slideElems[0]).appendTo(slideWrapper);
    slideWrapper.css('marginLeft', '0');
    if (currentSlide === totalSlideCount) {
        currentSlide = 1;
    } else {
        currentSlide++;
    }
    var currentToggler = getCurrentToggler(currentSlide);
    slideToggler.removeClass('active-toggler');
    $(currentToggler).addClass('active-toggler');
}

function Autotoggle() {
	autoToggleId = setInterval(function () {
		leftSlideLogic();
        setTimeout(relocateSlide, 500);
        slideElems = $('.slide');
        console.log(currentSlide);
	}, 3400);
}
Autotoggle();

slider.hover(function () {
	clearInterval(autoToggleId)
}, function () {
	Autotoggle()
});













