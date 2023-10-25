let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let slideIndextwo = 1;
showSlidestwo(slideIndextwo);

function plusSlidestwo(n) {
  showSlidestwo(slideIndextwo += n);
}

function currentSlidetwo(n) {
  showSlidestwo(slideIndextwo = n);
}

function showSlidestwo(n) {
  let i;
  let slidestwo = document.getElementsByClassName("mySlides-2");
  let dotstwo = document.getElementsByClassName("dot-2");
  if (n > slidestwo.length) {slideIndextwo = 1}
  if (n < 1) {slideIndextwo = slidestwo.length}
  for (i = 0; i < slidestwo.length; i++) {
    slidestwo[i].style.display = "none";
  }
  for (i = 0; i < dotstwo.length; i++) {
    dotstwo[i].className = dotstwo[i].className.replace(" active", "");
  }
  slidestwo[slideIndextwo-1].style.display = "block";
  dotstwo[slideIndextwo-1].className += " active";
}


let slideIndexthree = 1;
showSlidesthree(slideIndexthree);

function plusSlidesthree(n) {
  showSlidesthree(slideIndexthree += n);
}

function currentSlidethree(n) {
  showSlidesthree(slideIndexthree = n);
}

function showSlidesthree(n) {
  let i;
  let slidesthree = document.getElementsByClassName("mySlidesthree");
  let dotsthree = document.getElementsByClassName("dot-3");
  if (n > slidesthree.length) {slideIndexthree = 1}
  if (n < 1) {slideIndexthree = slidesthree.length}
  for (i = 0; i < slidesthree.length; i++) {
    slidesthree[i].style.display = "none";
  }
  for (i = 0; i < dotsthree.length; i++) {
    dotsthree[i].className = dotsthree[i].className.replace(" active", "");
  }
  slidesthree[slideIndexthree-1].style.display = "block";
  dotsthree[slideIndexthree-1].className += " active";
}
