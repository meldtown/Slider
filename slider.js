

var slideCount = 3,
	slider = $('.slider'),
	sliderWidth = slider.width(),
 	slideElems = $('.slide'),
 	slideElem = $(slideElems[0]),
 	totalSlideCount = slideElems.length,
 	slideWidthPercent = (1 / slideCount).toFixed(2),
 	slideWidthPercentFormatted = slideWidthPercent * 100,
 	slideWrapper = $('.slide-wrapper'),
 	slideWrapperWidth = slideWrapper.width(totalSlideCount * 100 / slideCount + '%'),
 	slideElemsWidth = slideElems.width((100 / totalSlideCount ) + '%');









