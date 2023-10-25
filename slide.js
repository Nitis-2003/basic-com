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


let slideIndexfour = 1;
showSlidesfour(slideIndexfour);

function plusSlidesfour(n) {
  showSlidesfour(slideIndexfour += n);
}

function currentSlidefour(n) {
  showSlidesfour(slideIndexfour = n);
}

function showSlidesfour(n) {
  let i;
  let slidesfour = document.getElementsByClassName("mySlides-4");
  let dotsfour = document.getElementsByClassName("dot-4");
  if (n > slidesfour.length) {slideIndexfour = 1}
  if (n < 1) {slideIndexfour = slidesfour.length}
  for (i = 0; i < slidesfour.length; i++) {
    slidesfour[i].style.display = "none";
  }
  for (i = 0; i < dotsfour.length; i++) {
    dotsfour[i].className = dotsfour[i].className.replace(" active", "");
  }
  slidesfour[slideIndexfour-1].style.display = "block";
  dotsfour[slideIndexfour-1].className += " active";
}

let slideIndexfive = 1;
showSlidesfive(slideIndexfive);

function plusSlidesfive(n) {
  showSlidesfive(slideIndexfive += n);
}

function currentSlidefive(n) {
  showSlidesfive(slideIndexfive = n);
}

function showSlidesfive(n) {
  let i;
  let slidesfive = document.getElementsByClassName("mySlides-5");
  let dotsfive = document.getElementsByClassName("dot-5");
  if (n > slidesfive.length) {slideIndexfive = 1}
  if (n < 1) {slideIndexfive = slidesfive.length}
  for (i = 0; i < slidesfive.length; i++) {
    slidesfive[i].style.display = "none";
  }
  for (i = 0; i < dotsfive.length; i++) {
    dotsfive[i].className = dotsfive[i].className.replace(" active", "");
  }
  slidesfive[slideIndexfive-1].style.display = "block";
  dotsfive[slideIndexfive-1].className += " active";
}

let slideIndexsix = 1;
showSlidessix(slideIndexsix);

function plusSlidessix(n) {
  showSlidessix(slideIndexsix += n);
}

function currentSlidesix(n) {
  showSlidessix(slideIndexsix = n);
}

function showSlidessix(n) {
  let i;
  let slidessix = document.getElementsByClassName("mySlides-6");
  let dotssix = document.getElementsByClassName("dot-6");
  if (n > slidessix.length) {slideIndexsix = 1}
  if (n < 1) {slideIndexsix = slidessix.length}
  for (i = 0; i < slidessix.length; i++) {
    slidessix[i].style.display = "none";
  }
  for (i = 0; i < dotssix.length; i++) {
    dotssix[i].className = dotssix[i].className.replace(" active", "");
  }
  slidessix[slideIndexsix-1].style.display = "block";
  dotssix[slideIndexsix-1].className += " active";
}