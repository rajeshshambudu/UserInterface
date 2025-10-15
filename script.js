// Optional JavaScript to add a smooth parallax scrolling effect
document.addEventListener("scroll", function() {
    const parallaxContainer = document.querySelector('.parallax-container');
    const scrollPosition = window.pageYOffset;

    // Adjust the background position based on scroll
    parallaxContainer.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
});
