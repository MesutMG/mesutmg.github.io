const darkModeToggle = document.getElementById('darkModeToggle');

// Add event listener to the toggle button
darkModeToggle.addEventListener('click', () => {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');
    
    // Toggle text on the button
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
    } else {
        darkModeToggle.textContent = 'Dark Mode';
    }
});