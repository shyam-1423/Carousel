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
    } 
    else if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Go to the last slide
    }

    showSlides(currentSlide);  // Show the updated slide
}

// Initialize the first slide as active when the page loads
showSlides(currentSlide);






