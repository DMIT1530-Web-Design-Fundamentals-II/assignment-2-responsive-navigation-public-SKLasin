document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-btn');
    const navMenu = document.querySelector('.main-menu');

    toggleButton.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    const parentLinks = document.querySelectorAll('.main-menu > li > .first-link');

    parentLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const submenu = link.nextElementSibling;
            if (submenu && submenu.classList.contains('second-tier')) {
                submenu.classList.toggle('open');
            }
        });
    });
});
