
document.addEventListener('DOMContentLoaded', function () {
 
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.querySelector('.navbar');
    const navClose = document.getElementById('navClose');
    const navOverlay = document.getElementById('navOverlay');
 
    function openMenu() {
        navbar.classList.add('active');
        if (navOverlay) navOverlay.classList.add('active');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
    }
 
    function closeMenu() {
        navbar.classList.remove('active');
        if (navOverlay) navOverlay.classList.remove('active');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    }
 
    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', function () {
            if (navbar.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
 
        // close (✕) বাটনে ক্লিক করলে drawer বন্ধ হবে
        if (navClose) {
            navClose.addEventListener('click', closeMenu);
        }
 
        // overlay এর বাইরে ক্লিক করলেও বন্ধ হবে
        if (navOverlay) {
            navOverlay.addEventListener('click', closeMenu);
        }
 
        // কোনো নেভিগেশন লিংকে ক্লিক করলে drawer বন্ধ হয়ে যাবে
        navbar.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });
 
        // বড় স্ক্রিনে resize করলে drawer state রিসেট হবে
        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });
    }
 
});