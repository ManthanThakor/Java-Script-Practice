document.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL
    var currentPageUrl = window.location.href;

    // Check if the current page is the home page
    if (currentPageUrl.endsWith('index.html') || currentPageUrl.endsWith('/')) {
        // Highlight the "Home" link by adding a CSS class
        var homeLink = document.getElementById('homeLink');
        homeLink.classList.add('active');
    }
    else if (currentPageUrl.endsWith('about.html')) {
        // Highlight the "About" link by adding a CSS class
        var aboutLink = document.getElementById('aboutLink');
        aboutLink.classList.add('active');
    }
    else if (currentPageUrl.endsWith('contact.html')) {
        // Highlight the "Contact" link by adding a CSS class
        var contactLink = document.getElementById('contactLink');
        contactLink.classList.add('active');
    }
});



