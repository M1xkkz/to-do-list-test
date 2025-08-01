document.addEventListener('DOMContentLoaded', () => {
    const templeList = document.querySelector('.temple-list');
    const columnCountSelect = document.getElementById('column-count');
    const autoplayToggle = document.getElementById('autoplay-toggle');
    const items = document.querySelectorAll('.wat');

    let autoplayInterval;
    let currentIndex = 0;

    // Function to update the number of columns
    function updateColumns(count) {
        templeList.style.gridTemplateColumns = `repeat(${count}, 1fr)`;
    }

    // Function to handle autoplay
    function startAutoplay() {
        if (autoplayInterval) clearInterval(autoplayInterval);
        autoplayInterval = setInterval(() => {
            // Logic for a carousel-like autoplay
            const watWidth = items[0].offsetWidth + 20; // width + gap
            const newScrollLeft = (templeList.scrollLeft + watWidth) % (templeList.scrollWidth);
            
            templeList.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });

            // If we've scrolled past the end, reset to the beginning
            if (newScrollLeft === 0 && templeList.scrollLeft !== 0) {
                 templeList.scrollTo({ left: 0, behavior: 'auto' });
            }
        }, 3000); // Change item every 3 seconds
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    
    // Event listener for column count
    columnCountSelect.addEventListener('change', (e) => {
        updateColumns(e.target.value);
    });

    // Event listener for autoplay toggle
    autoplayToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            startAutoplay();
        } else {
            stopAutoplay();
        }
    });

    // Initial setup
    updateColumns(columnCountSelect.value);
    if (autoplayToggle.checked) {
        startAutoplay();
    }
});