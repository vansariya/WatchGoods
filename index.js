const hamburgerBtn = document.getElementById('hamburger-btn');
const menu = document.getElementById('menu');

// Add event listener for hamburger button click
hamburgerBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    
    // Show or hide the menu based on the active class
    if (menu.classList.contains('active')) {
        menu.style.display = 'block'; // Ensure the menu is visible
    } else {
        menu.style.display = 'none'; // Hide the menu immediately
    }
});

