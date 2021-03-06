var slideIndex = 1;
showSlides(slideIndex);

const skip = document.querySelector('.skip-button');

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
    if (slideIndex==5) {
        skip.style.opacity="0"
      }
    else{
        skip.style.opacity="1"
    }
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
    if (n!=5) {
      skip.style.opacity="1"
    }
    else{
        skip.style.opacity="0"
    }
  };

//Skip button

skip.addEventListener('click', event =>{
      skip.style.opacity="0"
      currentSlide(5)
  });

// Function Slide

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
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



