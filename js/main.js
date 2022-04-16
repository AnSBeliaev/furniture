const selectFirst = document.getElementById('select-first'),
	  selectSecond = document.getElementById('select-second'),
	  selectThird = document.getElementById('select-third'),
	  slides = document.querySelectorAll('.slider__item'),
	  dots = document.querySelectorAll('.dot')

let index = 0;

const activeSlide = n => {
	console.log(n);
	for(slide of slides) {
		slide.classList.remove('item-active');
	}
	slides[n].classList.add('item-active');
}

const nextSlide = () => {
	if(index == slides.length - 1) {
		index = 0;
		activeSlide(index);
	} else {
		index++;
		activeSlide(index);
	}
}

selectFirst.addEventListener('click', nextSlide)