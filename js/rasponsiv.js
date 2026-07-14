// rasponsiv.js
// Mobile & tablet responsive behavior for Desi Grocery site
// - Left-side slide-in drawer menu with hamburger + close button + overlay

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

    // ---------- Dark mode toggle ----------
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            if (themeToggle) themeToggle.textContent = '☀️';
        } else {
            body.classList.remove('dark-mode');
            if (themeToggle) themeToggle.textContent = '🌙';
        }
    }

    // পেজ লোড হওয়ার সাথে সাথে আগের পছন্দ (localStorage) প্রয়োগ করা হচ্ছে
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const isDark = body.classList.contains('dark-mode');
            const newTheme = isDark ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

});