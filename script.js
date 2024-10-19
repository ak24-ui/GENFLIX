document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    this.reset(); // Reset the form fields
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Search functionality (basic example)
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const genres = document.querySelectorAll('.genre');

    genres.forEach(genre => {
        const text = genre.textContent.toLowerCase();
        genre.style.display = text.includes(searchValue) ? 'block' : 'none';
    });
});


//genre functionality

document.addEventListener("DOMContentLoaded", function () {
    const genres = document.querySelectorAll('.genre');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add visible class
          observer.unobserve(entry.target); // Stop observing
        }
      });
    });
  
    genres.forEach(genre => {
      observer.observe(genre); // Observe each genre
    });
  });

  

  // Get the video and button elements
const video = document.getElementById('movie-video');
const toggleViewBtn = document.getElementById('toggle-view');

// Track the current view state (portrait or landscape)
let isLandscape = true;

// Toggle between portrait and landscape views
toggleViewBtn.addEventListener('click', function() {
    if (isLandscape) {
        video.style.transform = 'rotate(90deg)';
        video.style.width = 'auto';
        video.style.height = '80vh';
    } else {
        video.style.transform = 'rotate(0deg)';
        video.style.width = '80%';
        video.style.height = 'auto';
    }
    isLandscape = !isLandscape; // Toggle the state
});

