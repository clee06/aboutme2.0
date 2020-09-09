console.log('Hello')

// JQUERY SMOOTH SCROLL

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        var hash = this.hash; // store variable
  
        // Using jQuery's animate() method to add smooth page scroll
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){ // 800 miliseconds for scroll animation
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } 
    });
  });

// Landing Page H1 animation

const element = document.querySelector('.introHeader');

element.style.setProperty('--animate-duration', '2.25s');
element.classList.add('animate__animated', 'animate__backInRight');

// Landing Page H3 animation
const elementTwo = document.querySelector('.secondHeader');

elementTwo.style.setProperty('--animate-duration', '2.65s');
elementTwo.classList.add('animate__animated', 'animate__backInLeft');

// animate__fadeInLeft
// animate__fadeInDown
// animate__fadeInUp
// animate__fadeInRight

document.addEventListener('scroll', function () {
    var top  = window.scrollY + window.innerHeight;
    console.log(top); 
        
    // let isVisible = top > document.querySelector('.containerPhoto > img');
  
     if (top > 2500) {

      
       document.getElementById('photoLeft').classList.add('animate__animated', 'animate__fadeInLeft').style.setProperty('--animate-duration', '2.25s');
       document.getElementById('photoDown').classList.add('animate__animated', 'animate__fadeInDown');
       document.getElementById('photoUp').classList.add('animate__animated', 'animate__fadeInUp');
       document.getElementById('photoRight').classList.add('animate__animated', 'animate__fadeInRight');

     }
  });

// Attempted to add animation duration once you scroll down to the 2500 pixel mark, but could not get the animation duration to increase for some reason...
// below is the script which runs the delay correctly, but could not add it into the above function to fire after scrolling down 2500 px.

    // const photoLeft = document.getElementById('photoLeft');
    // photoLeft.style.setProperty('--animate-duration', '2.25s');
    // photoLeft.classList.add('animate__animated', 'animate__fadeInLeft');

    // const photoDown = document.getElementById('photoDown');
    // photoDown.style.setProperty('--animate-duration', '2.25s');
    // photoDown.classList.add('animate__animated', 'animate__fadeInDown')

    // const photoUp = document.getElementById('photoUp');
    // photoUp.style.setProperty('--animate-duration', '2.25s');
    // photoUp.classList.add('animate__animated', 'animate__fadeInUp')

    // const photoRight = document.getElementById('photoRight');
    // photoRight.style.setProperty('--animate-duration', '2.25s');
    // photoRight.classList.add('animate__animated', 'animate__fadeInRight')


// Modal function - Light Box

function openModal (){
    // Show image viewer or modal when any image is clicked
    document.getElementById('my-modal').style.display = "inline-flex";
}

function closeModal (){
    // close image viewer or modal when any image is clicked
    document.getElementById('my-modal').style.display = "none" ;
}

// declare variables slideIndexJS and initialize to 1
var slideIndexJS = 1;

// Calls the function showSlides() by passing variable slideIndexJS. This will hide all the slides initially.
showSlides(slideIndexJS);

function changeSlides(n){
    showSlides(slideIndexJS += n);
}

// display clicked thumbnail image
function currentSlide(n){
    showSlides(slideIndexJS = n);
}

// Main function to operate the image viewer
function showSlides(n){
    var i;

    // get all elements with class "my-slides"
    var slidesJS = document.getElementsByClassName("my-slides");

    // // if the slide index is greater than total number of slides, then open slideIndexJS = 1 (begins with the first slide after last slide ends)
    if (n > slidesJS.length) {slideIndexJS = 1;}

    // for loop to hide all slides initially
    for(i=0; i < slidesJS.length; i++){
        slidesJS[i].style.display = "none";
    }

    // Show Slide which is clicked
    slidesJS[slideIndexJS-1].style.display = "block";

}

// Footer Date Function
let today = new Date();

let date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();

document.getElementById("currentDate").innerHTML = date;
