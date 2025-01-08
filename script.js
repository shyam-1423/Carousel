let currentSlide = 0;  // Start from the first slide (0-based index)

// Function to show the slides
function showSlides(index) {
    const slides = document.getElementsByClassName('slide');
    const bars = document.getElementsByClassName('bar');

    // Remove 'active' class from all slides and bars
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        bars[i].classList.remove('active');
    }

    // Add 'active' class to the current slide and corresponding bar
    slides[index].classList.add('active');
    bars[index].classList.add('active');
}

// Function to change slides when navigation buttons are clicked
function changeSlides(direction) {
    const slides = document.getElementsByClassName('slide');
    currentSlide += direction;

    // Wrap around if index exceeds the number of slides
    if (currentSlide >= slides.length) {
        currentSlide = 0; // Go back to the first slide
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Go to the last slide
    }

    showSlides(currentSlide);  // Show the updated slide
}

// Initialize the first slide as active when the page loads
showSlides(currentSlide);






// let slideIndex = 1;

// // Show initial slide
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Current slide controls (when a bar is clicked)
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let slides = document.getElementsByClassName("slide");
//     let bars = document.getElementsByClassName("bar");

//     // Wrap around if index exceeds number of slides
//     if (n > slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }

//     // Loop through slides and remove "active" class
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].classList.remove("active");
//     }

//     // Loop through bars and remove "active" class
//     for (let i = 0; i < bars.length; i++) {
//         bars[i].classList.remove("active");
//     }
//     // Add "active" class to the current slide and corresponding bar
//     slides[slideIndex - 1].classList.add("active");
//     bars[slideIndex - 1].classList.add("active");
// }