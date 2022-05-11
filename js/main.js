"use strict";

let slides = document.querySelectorAll('.slider__item');


slides.forEach((n, i, a) => {
    n.addEventListener('click', () => a.forEach(m => m.classList.toggle('active', m === n)));
  });
